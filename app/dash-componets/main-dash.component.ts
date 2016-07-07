import { Component, OnInit} from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { User } from '../models';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  selector: 'dash-main',
  templateUrl:`./public/views/dash.componet.html`,
   providers: [UserService,DataService],
   directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
})

export class DashComponent implements OnInit  {
  sideBarVisable:boolean = false;
  posts:any;
  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService
  ){

	}

  ngOnInit(){
    this.dataService.getData('http://www.reddit.com/r/pics/top.json').subscribe(
       (data:any) => {
         this.posts = data.children;
         console.log(this.posts);
       },
       (error) => {console.log(error)}
     );
  }

  showSidebar = () => {
    this.sideBarVisable = !this.sideBarVisable;
  }
}
