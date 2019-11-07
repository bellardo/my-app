import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogged: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    
    this.auth.login()
      .subscribe(data => {
        console.log(data);

        this.auth.updateSession(data['token']);

        if (this.auth.userLogged)
          this.router.navigate(['home']);

      });

  }  

}
