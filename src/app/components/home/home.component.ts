import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/Message';
import { Chat } from '../../Chat';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    'assets/chatgpt-icon.svg',
    'Bot',
    '',
    true
  );

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.getChats().subscribe(chats => {
      this.chats = chats;
      this.names = this.chats.map(chat => chat.name);
      this.currentChat = chats[0];
      this.currentName = this.names[0];
      this.openChat(this.currentName);
    });
  }

  sendMessage() {
    var message = (<HTMLInputElement>document.getElementById("input")).value.trim();
    (<HTMLInputElement>document.getElementById("input")).value = "";
    if (message.length > 1) {
      this.currentMessages.push(new Message(
        'outgoing',
        'https://img.icons8.com/material-rounded/35/ffffff/user.png',
        'User',
        message
      ));
      setTimeout(() => {
        this.currentMessages.push(this.typingDots);
      }, 1000);
      setTimeout(() => {
        this.currentMessages.pop();
        this.currentMessages.push(new Message(
          'incoming',
          'assets/chatgpt-icon.svg',
          'Bot',
          'Hello, this is a bot message!'
        ));
        this.saveChat();
      }, 2000);
    }
  }

  openChat(chatName: string) {
    this.currentName = chatName;
    this.currentMessages = this.chats.find(chat => chat.name == chatName)!.messages;
  }

  openNewChat() {

  }

  saveChat() {
    this.currentChat.messages = this.currentMessages;
    console.log(this.currentChat);
    
    this.homeService.updateChat(this.currentChat).subscribe();
  }
}