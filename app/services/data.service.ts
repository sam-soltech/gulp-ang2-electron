import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { User } from '../models';
import 'rxjs/Rx';
@Injectable()
export class DataService {
  constructor (private http: Http) {}

  getData (url:string): Observable<any[]> {
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
   let body = res.json();
     return body.data || { };
  }

  private handleError (error: any) {
   // In a real world app, we might use a remote logging infrastructure
   // We'd also dig deeper into the error to get a better message
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
   console.error(errMsg); // log to console instead
   return Observable.throw(errMsg);
 }
}
