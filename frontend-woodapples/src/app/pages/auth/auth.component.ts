import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  showLogin = true;

  toggleForm(){
    this.showLogin = !this.showLogin;
  }
}
