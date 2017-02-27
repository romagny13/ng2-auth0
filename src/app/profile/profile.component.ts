import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: any;

  constructor(private auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

}
