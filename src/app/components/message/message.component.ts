import { Component, Input, OnInit } from '@angular/core';
import { Message } from './Message';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  @Input() public message: Message = new Message('', '', '', '');
  faCopy = faCopy;
  
  constructor() { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    console.log(content);
  }

}
