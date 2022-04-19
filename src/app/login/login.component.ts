import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userData: any = {};

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    
  }

  login() {

    console.log(this.userData)
    this._auth.loginUser(this.userData)
    .subscribe({
      next: (user: any) =>  {
        console.log(user)
      },
    })
  }
}
