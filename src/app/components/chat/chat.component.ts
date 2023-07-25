import { Component, OnInit } from '@angular/core';
import { Message } from '../message/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  public messages: Message[] = [
    new Message(
      'outgoing',
      'https://img.icons8.com/material-rounded/35/ffffff/user.png',
      'User',
      'Hello, this is a user message!'
    ),
    new Message(
      'incoming',
      'assets/chatgpt-icon.svg',
      'Bot',
      'Hello, this is a bot message!'
    )
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    console.log(content);
  }
}
