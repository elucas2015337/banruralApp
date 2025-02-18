import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
})
export class DashboardPage implements OnInit {
  posts: any[] = [];

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.authService.userIsLoggedIn()){
      this.router.navigateByUrl('/login')
    }

    this.dataService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 10);
    });
  }

  logout(){
    this.authService.loggout();
    this.router.navigateByUrl('login');
  }

}
