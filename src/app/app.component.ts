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
    this.sessionKey = uuidv4(); // Generate a unique key for this session
    const db = getDatabase();
    const userCountRef = ref(db, 'userCount');
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
