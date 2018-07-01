import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { Observer } from 'rxjs-compat/Observer';
import * as socketIo from 'socket.io-client';

import { Socket } from '../shared/socket';

declare var io : {
  connect(url: string): Socket;
};


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  socket: Socket;
  observer: Observer<number>;

  constructor() { }

  getQuotes() : Observable<number> {

    this.socket = socketIo("http://localhost:4445");

    this.socket.on('data', (res) => {
        this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable() : Observable<number> {

    return new Observable<number>( observer => {
      this.observer = observer;
    });
  }

  private handleError(error) {
    console.log('server error: ', error);

    if(error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw (errMessage);
      
    }

    return Observable.throw(error ||
    'Socket.io server error');
  }

}
