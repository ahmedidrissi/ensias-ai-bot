import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit() { };
}
