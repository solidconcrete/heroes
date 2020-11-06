import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    // add a message to messages cache
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
