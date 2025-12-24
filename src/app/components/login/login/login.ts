import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private authService = inject(AuthService)
  private router = inject(Router)

  password!: string
  errorMessage = signal<string>('')

  onLogin() {
    let success =  this.authService.login(this.password)
    if(success)
      this.router.navigate(['/dashboard'])
    else this.errorMessage.set('Credenciales incorrectas')
  }

}
