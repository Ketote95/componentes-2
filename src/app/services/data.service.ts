import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Action-Sheet',
      subject: 'Options in action sheets',
      date: 'Yesterday',
      id: 0,
      read: false
    },
    {
      fromName: 'Alert',
      subject: 'An alert button',
      date: 'Yesterday',
      id: 1,
      read: false
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
