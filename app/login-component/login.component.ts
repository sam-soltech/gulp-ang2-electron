import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `
   <h2>Login</h2>
   <p>Get login here</p>`
  // templateUrl: '../views/login.component.html',
})

export class LoginComponent implements OnInit {
	ngOnInit(){
		console.log('im in');
	}
}
