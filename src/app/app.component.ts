import { Component } from '@angular/core';
import { getDatabase, ref, onValue, set, onDisconnect, runTransaction, push, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userCount: number = 0;
  sessionKey: string = '';

  ngOnInit() {
    // Check if a session key already exists in local storage
    this.sessionKey = localStorage.getItem('firebase-session-key') || uuidv4();
    localStorage.setItem('firebase-session-key', this.sessionKey); // Store the session key in local storage

    const db = getDatabase();
    const userSessionRef = ref(db, `sessions/${this.sessionKey}`);

    // Listen for changes in the user count
    onValue(ref(db, 'sessions'), (snapshot) => {
      const sessions = snapshot.val();
      this.userCount = sessions ? Object.keys(sessions).length : 0;
    });

    // Add the session key to the database
    set(userSessionRef, true).then(() => {
      // Set up onDisconnect to remove the session key when the user disconnects
      onDisconnect(userSessionRef).remove();
    });
  }
}
