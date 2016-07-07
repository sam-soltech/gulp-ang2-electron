import {Component, OnInit} from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { User } from '../models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/common';

@Component({
  selector: 'login',
  templateUrl:`./public/views/login.componet.html`,
   providers: [UserService]
})

export class LoginComponent implements OnInit {
  user:User;
  invlaidUser:boolean = false;
  constructor(
    private router: Router,
    private userService: UserService
  ){

	}

  ngOnInit(){
    this.user = new User;
  }

  onSubmit = () => {
    this.userService.getUser(this.user).then((response) => {
      if(!response){
        this.invlaidUser = true;
      }
      else {
        this.router.navigate(['/dash']);
      }
    });
  }
}
