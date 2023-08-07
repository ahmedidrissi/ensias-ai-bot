import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../Chat';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:3000/chats';

  constructor(
    private http: HttpClient
  ) { }

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.apiUrl);
  }

  updateChat(chat: Chat): Observable<Chat> {
    const id = chat.id
    const url = `${this.apiUrl}/${id}`;

    return this.http.put<Chat>(url, chat);
  }

  addChat(chat: Chat): Observable<Chat> {
    const id = chat.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.post<Chat>(url, chat);
  }

  deleteChat(chat: Chat): Observable<Chat> {
    const id = chat.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Chat>(url);
  }


}