import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject<string | null>(null);

  message$ = this.messageSource.asObservable();

  setMessage(message: string): void {
    this.messageSource.next(message);
    setTimeout(() => {
      this.clearMessage();
    }, 5000); // 5000 ms = 5 seconds
  }

  clearMessage() {
    this.messageSource.next(null);
  }

  constructor() {}
}
