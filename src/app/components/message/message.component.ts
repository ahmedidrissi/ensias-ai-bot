import { Component, Input, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';
import { Message } from './Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  faCopy = faCopy;
  @Input() public message: Message = new Message('', '', '', '');
  
  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    this.messageService.copyMessage(content);
  }

}
