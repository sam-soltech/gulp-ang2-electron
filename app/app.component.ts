import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';




@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template:`
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'Angular App SetUp';
  // testIcp = () => {
  //   console.log(ipcRenderer.sendSync('sendSomething', 'ping'));
  // }
}
