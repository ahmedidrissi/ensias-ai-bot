import { Component, Input, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Message } from './Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  faCopy = faCopy;
  @Input() public message: Message = new Message('', '', '', '');
  
  constructor() { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    navigator.clipboard.writeText(content);
  }

}
