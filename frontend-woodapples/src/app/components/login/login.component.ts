import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import { LoginUser } from '../../models/login-user';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, FormsModule, IftaLabelModule, PasswordModule, Message],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})

export class LoginComponent {
    user: LoginUser = { username: '', password: ''};
    errorMsg: string = '';

    login () {
      if (this.user.username && this.user.password) {
        console.log('Benutzer angemeldet:', this.user);
      } else {
        this.errorMsg = 'Benutzername und Passwort sind erforderlich!';
      }
    }
}

