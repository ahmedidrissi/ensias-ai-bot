import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copyMessage(content: string) {
    navigator.clipboard.writeText(content);
  }
}
