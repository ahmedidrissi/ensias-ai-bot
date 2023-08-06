import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

    @Output() btnClick = new EventEmitter();
    faTelegram = faTelegramPlane;
  
    constructor() { }
  
    ngOnInit() {
    }

    onClick() {
      this.btnClick.emit();
    }
}
