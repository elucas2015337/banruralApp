import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NumbersOnlyDirective } from 'src/app/directives/numbers-only.directive';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NumbersOnlyDirective
    // otros módulos o componentes que uses
  ],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  
  ngOnInit() {
  }

  username = '';
  password = '';
  errorMessage = '';

  login() {
    const ok = this.authService.login(this.username, this.password)

    if(ok) {
      this.errorMessage = '';
      this.router.navigateByUrl('/dashboard');
    }else{
      this.errorMessage = 'credenciales inválidas'
    }
  }

}
