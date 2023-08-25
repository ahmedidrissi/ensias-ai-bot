import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/Message';
import { Chat } from '../../Chat';
import { HomeService } from '../../services/home.service';
import { SpeechService } from '../../services/speech.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInfos: any = {
    name: 'Ahmed Idrissi',
    avatar: 'https://img.icons8.com/material-rounded/35/ffffff/user.png'
  };
  chats: Chat[] = [];
  names : string[] = [];
  currentChat: Chat = {
    id: 0,
    name: "",
    messages: []
  };
  currentName: string = "";
  currentMessages: Message[] = [];
  typingDots: Message = new Message(
    'incoming',
    'assets/HassanGPT.png',
    'Bot',
    '',
    true
  );

  constructor(
    private homeService: HomeService,
    private speechService: SpeechService
  ) {}

  ngOnInit(): void {
    this.homeService.getChats().subscribe(chats => {
      this.chats = chats;
      this.names = this.chats.map(chat => chat.name);
      this.currentChat = chats[0];
      this.openChat(this.names[0]);
    });
  }

  sendMessage() {
    let chatContainer = document.querySelector(".chat-container")!;
    var message = (<HTMLInputElement>document.getElementById("input")).value.trim();
    (<HTMLInputElement>document.getElementById("input")).value = "";

    if (message.length > 1) {
      this.currentMessages.push(new Message(
        'outgoing',
        'https://img.icons8.com/material-rounded/35/ffffff/user.png',
        'User',
        message,
        false
      ));  
      // chatContainer.scrollTo(0, chatContainer.scrollHeight);  
      chatContainer.scrollTop = chatContainer.scrollHeight;    
      
      // this.speechService.setVoice();
      
      setTimeout(() => {
        this.currentMessages.push(this.typingDots);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000);
      setTimeout(() => {
        this.homeService.getResponse(message).subscribe(response => {
          this.currentMessages.pop();
          this.currentMessages.push(new Message(
            'incoming',
            'assets/HassanGPT.png',
            'Bot',
            response[0].text,
            false,
            response[1]?.image ?? null
          ));
          chatContainer.scrollTop = chatContainer.scrollHeight;
          this.speechService.speak(response[0].text);
          this.saveChat();
        });
      }, 1000);
    }
  }

  openChat(chatName: string) {
    this.currentChat = this.chats.find(chat => chat.name == chatName)!;
    this.currentName = chatName;
    this.currentMessages = this.currentChat.messages;
  }

  openNewChat() {
    let newId = this.chats.length + 1;
    let newName = 'chat ' + newId;
    let newChat: Chat = {
      id: newId,
      name: newName,
      messages: []
    };
    this.homeService.addChat(newChat).subscribe(()=>{
      this.chats.push(newChat);
      this.names.push(newChat.name);
      this.currentChat = newChat;
      this.openChat(newChat.name);
    });
  }

  saveChat() {   
    this.homeService.updateChat(this.currentChat).subscribe(() => {
      this.currentChat.messages = this.currentMessages; 
    });
  }
  
  deleteChat(chatName: string) {
    const chat = this.chats.find(chat => chat.name == chatName)!;

    this.homeService.deleteChat(chat).subscribe(() => {
      this.chats = this.chats.filter(chat => chat.name != chatName);
      this.names = this.chats.map(chat => chat.name);
      this.currentChat = this.chats[0];
      if (this.currentChat) {
        this.openChat(this.currentChat.name);
      } else {
        this.currentName = "";
        this.currentMessages = [];
      }
    });
  }
}