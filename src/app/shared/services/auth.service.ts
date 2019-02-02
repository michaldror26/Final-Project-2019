import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable()
export class AuthService {
    private _listners = new Subject<any>();

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    setRouter() {
       this._listners.next();
    }

}
