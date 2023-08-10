import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../Chat';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:3000/chats';
  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';

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
    return this.http.post<Chat>(this.apiUrl, chat);
  }

  deleteChat(chat: Chat): Observable<Chat> {
    const id = chat.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Chat>(url);
  }

  getResponse(message: string): Observable<any> {
    const body = {
      "sender": "user",
      "message": message
    }

    return this.http.post<any>(this.rasaUrl, body);
  }

}
