import {Component} from '@angular/core';
import { remote, ipcRenderer } from 'electron';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h2>{{title}}</h2>
    <button (click)="testIcp()">Test</button>
    `
})
export class AppComponent {
  title = 'Angular App Setup';

  testIcp = () => {
    console.log(ipcRenderer.sendSync('sendSomething', 'ping'));
  }
}
