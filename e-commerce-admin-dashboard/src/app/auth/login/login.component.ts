import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() { if (this.username && this.password) { 
    console.log('Attempting login with:', this.username, this.password);
     this.apiService.login(this.username, this.password).subscribe( 
      (response: any) => { 
      console.log('Login successful:', response); 
      localStorage.setItem('token', response.token); 
      this.router.navigate(['/home']); }, 
      error => { this.errorMessage = 'Login failed. Please check your credentials and try again.'; 
    console.error('Login failed', error);
   } ); 
  } else { this.errorMessage = 'Please enter both username and password.';
    
   }
   }}