import {Component} from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { User } from '../models';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/common';

@Component({
  selector: 'login',
  templateUrl:`./public/views/login.componet.html`
})

export class LoginComponent {
  user:User;
  constructor(private router: Router){
    this.user = new User;
	}

  onSubmit = () => {
    console.log(this.user)
  }
}
