import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginGoogle() {
    // this.authService.login(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    // this.authService.login(new firebase.auth.FacebookAuthProvider());
  }

}
