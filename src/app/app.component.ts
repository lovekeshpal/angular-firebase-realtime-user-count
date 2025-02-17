import { UserCountComponent } from './components/user-count/user-count.component';
import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  onNavClick(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
