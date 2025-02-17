import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { UserCountService } from '../../services/user-count/user-count.service';

@Component({
  selector: 'app-user-count',
  imports: [],
  templateUrl: './user-count.component.html',
  styleUrl: './user-count.component.scss',
})
export class UserCountComponent {
  userCount: number = 0;

  private userCountService = inject(UserCountService);

  constructor() {}

  ngOnInit() {
    this.userCountService.userCount$.subscribe((count: any) => {
      this.userCount = count;
    });
  }
}
