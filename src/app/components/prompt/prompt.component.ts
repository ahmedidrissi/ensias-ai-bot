import { Component, OnInit } from '@angular/core';
import { PromptService } from '../../services/prompt.service';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

    faTelegram = faTelegramPlane;
  
    constructor(
      public promptService: PromptService
    ) { }
  
    ngOnInit() {
    }

    sendMessage() {
      var message = (<HTMLInputElement>document.getElementById("input")).value;
      (<HTMLInputElement>document.getElementById("input")).value = "";
      this.promptService.sendMessage(message); 
    }
}
