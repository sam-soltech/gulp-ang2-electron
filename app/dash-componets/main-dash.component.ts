import { Component} from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { User } from '../models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  selector: 'dash-main',
  templateUrl:`./public/views/dash.componet.html`,
   providers: [UserService],
   directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
})

export class DashComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ){

	}
}
