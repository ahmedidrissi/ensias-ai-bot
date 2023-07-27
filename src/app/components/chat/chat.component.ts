import { Component, OnInit } from '@angular/core';
import { Message } from '../message/Message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.appendMessage('Hello, this is a user message!');
    // setTimeout(() => {
    //   this.chatService.appendMessage('Hello, this is a user message!');
    // }, 2000);
    // setTimeout(() => {
    //   this.chatService.appendMessage('Hello, this is a user message!');
    // }, 4000);
  }
}
