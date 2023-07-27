import { Injectable, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class PromptService implements OnInit {

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {
  }

  sendMessage(message: string) {
    this.chatService.appendMessage(message);
  }
}
