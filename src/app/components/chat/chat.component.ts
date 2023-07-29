import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../message/Message';
import { map } from 'rxjs';

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
    let messages = localStorage.getItem('messages');
    if (messages) {
      this.chatService.messages = JSON.parse(messages);
    }
  };
}
