import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faTimes, faPlus, faBars, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() names: string[] = [];
  @Input() currentName: string = "";
  @Output() onOpenChat = new EventEmitter<string>();
  @Output() onOpenNewChat = new EventEmitter();
  @Output() onDeleteChat = new EventEmitter<string>();

  faTimes = faTimes;
  faPlus = faPlus;
  faBars = faBars;
  faUser = faUser;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {}

  closeSidebar() {
    let sidebar = document.getElementById('sidebar');
    let prompt = document.getElementById('prompt');
    let sidebarToggler = document.getElementById('sidebar-toggler');

    sidebar!.style.display = 'none';
    prompt!.style.width = '100%';
    sidebarToggler!.style.display = 'block';
  }

  openSidebar() {
    let sidebar = document.getElementById('sidebar');
    let prompt = document.getElementById('prompt');
    let sidebarToggler = document.getElementById('sidebar-toggler');

    sidebar!.style.display = 'block';
    prompt!.style.width = 'calc(100% - 260px)';
    sidebarToggler!.style.display = 'none';
  }

  openNewChat() {
    this.onOpenNewChat.emit();
  }

  openChat(chatName: string) {
    this.onOpenChat.emit(chatName);
  }

  deleteChat(chatName: string) {
    this.onDeleteChat.emit(chatName);
  }

}
