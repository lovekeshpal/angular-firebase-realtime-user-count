import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, set, onDisconnect } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCountService {

  private userCountSubject = new BehaviorSubject<number>(0);
  userCount$ = this.userCountSubject.asObservable();
  private sessionKey: string;

  constructor() {
    this.sessionKey = localStorage.getItem('firebase-session-key') || uuidv4();
    localStorage.setItem('firebase-session-key', this.sessionKey); // Store the session key in local storage

    const db = getDatabase();
    const userSessionRef = ref(db, `sessions/${this.sessionKey}`);

    // Listen for changes in the user count
    onValue(ref(db, 'sessions'), (snapshot) => {
      const sessions = snapshot.val();
      const userCount = sessions ? Object.keys(sessions).length : 0;
      this.userCountSubject.next(userCount);
    });

    // Add the session key to the database
    set(userSessionRef, true).then(() => {
      // Set up onDisconnect to remove the session key when the user disconnects
      onDisconnect(userSessionRef).remove();
    });
  }
  
}
