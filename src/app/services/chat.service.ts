import { Injectable, OnInit } from '@angular/core';
import { Message } from '../components/message/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  public messages: Message[] = [];
  public typingDots: Message = new Message(
    'incoming',
    'assets/chatgpt-icon.svg',
    'Bot',
    '',
    true
  )

  constructor() { }

  ngOnInit() {
  }

  appendMessage(message: string) {
    if (message.length > 0) {
      this.messages.push(new Message(
        'outgoing',
        'https://img.icons8.com/material-rounded/35/ffffff/user.png',
        'User',
        message
      ));
      this.messages.push(this.typingDots);
      setTimeout(() => {
        this.messages.pop();
        this.messages.push(new Message(
          'incoming',
          'assets/chatgpt-icon.svg',
          'Bot',
          'Hello, this is a bot message!'
        ));
      }, 2000);
    }
  }
}
