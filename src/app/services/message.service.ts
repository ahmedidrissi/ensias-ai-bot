import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    console.log(content);
  }
}
