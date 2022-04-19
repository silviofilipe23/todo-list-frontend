import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  userData: any = {};

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    
  }

  register(){
    this._auth.registerUser(this.userData)
      .subscribe({
        next: (user: any) =>  {
          console.log(user)
        },
      })
  }

}
