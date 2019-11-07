import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.userLogged = this.auth.userLogged();

  }

  logout(event: Event) {
    event.preventDefault();

    this.auth.logout();
    this.userLogged = this.auth.userLogged();

    console.log(this.userLogged);

    this.router.navigate(['logout']);

  }

}
