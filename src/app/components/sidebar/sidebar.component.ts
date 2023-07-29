import { Component, OnInit } from '@angular/core';
import { faTimes, faPlus, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faTimes = faTimes;
  faPlus = faPlus;
  faBars = faBars;
  faUser = faUser;

  chats: String[] = [
    "Chat 1",
    "Chat 2",
    "Chat 3",
  ];

  constructor() { }

  ngOnInit(): void {
  }

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
    // document.getElementById('new-chat').style.display = 'block';
  }



}
