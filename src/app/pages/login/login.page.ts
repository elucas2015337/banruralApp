import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    // otros módulos o componentes que uses
  ],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
