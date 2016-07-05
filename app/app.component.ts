import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template:`
    <h2>{{title}}</h2>
    <button (click)="testIcp()">Test</button>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'Angular App SetUp';
  testIcp = () => {
    console.log(ipcRenderer.sendSync('sendSomething', 'ping'));
  }
}
