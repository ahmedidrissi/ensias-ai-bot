import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/Message';
import { Chat } from '../../Chat';
import { CHATS } from '../../mock-chats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chats: Chat[] = [];
  names : string[] = [];
  currentName: string = "";
  messages: Message[] = [];
  typingDots: Message = new Message(
    'incoming',
    'assets/chatgpt-icon.svg',
    'Bot',
    '',
    true
  )

  constructor() {}

  ngOnInit(): void {
    this.chats = this.getChats();
    this.chats.forEach(chat => {
      this.names.push(chat.name);
    });
    this.currentName = this.chats[0].name;
    this.messages = this.chats[0].messages;
  }

  sendMessage() {
    var message = (<HTMLInputElement>document.getElementById("input")).value.trim();
    (<HTMLInputElement>document.getElementById("input")).value = "";
    if (message.length > 1) {
      this.messages.push(new Message(
        'outgoing',
        'https://img.icons8.com/material-rounded/35/ffffff/user.png',
        'User',
        message
      ));
      setTimeout(() => {
        this.messages.push(this.typingDots);
      }, 1000);
      setTimeout(() => {
        this.messages.pop();
        this.messages.push(new Message(
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
    this.messages = this.chats.find(chat => chat.name === chatName)!.messages;
  }

  openNewChat() {

  }

  getChats(): Chat[] {
    return CHATS;
  }

  // loadChat(chatName: string): Chat {
  //   let chat = this.getChats().find(chat => chat.name === chatName);
  //   return chat!;
  // }

  saveChat() {
    let chat = this.getChats().find(chat => chat.name === this.currentName);
    if (chat) {
      chat.messages = this.messages;
    } else {
      CHATS.push({ name: this.currentName, messages: this.messages });
    }
  }
}