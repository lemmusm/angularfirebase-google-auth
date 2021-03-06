import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  userdata: User = {
    displayName: '',
    email: '',
    uid: '',
    photoURL: ''
  };

  constructor(private _authservice: AuthService, private router: Router) {
    this._authservice.afAuth.authState.subscribe(auth => {
      if (auth === null) {
        this.router.navigate(['/login']);
      } else {
        this.userdata = auth;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit() {}

  logout() {
    this._authservice.logout();
    console.log('Logged out');
  }
}
