import {Component} from '@angular/core';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'my-app',
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
