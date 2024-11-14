import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'eCommerce Dashboard';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

