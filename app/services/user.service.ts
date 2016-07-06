import { Injectable } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
import { User } from '../models';
@Injectable()
export class UserService {
  getUser(user:User) {
    ipcRenderer.send('getUser', user)
     return new Promise<User>((resolve, reject) => {
       ipcRenderer.once('user-reply', (event, arg) => {
         resolve(arg);
       });
    });
  }
}
