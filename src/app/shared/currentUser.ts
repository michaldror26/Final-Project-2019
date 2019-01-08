import {User} from './models/User.class';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CurrentUser  {
    private user:User=null;    

  constructor() {
  }
   get(){
       return this.user;
   }

   set(user:User){
      this.user=user;
   }

   isUserLogin()
   {
       return this.user!=null;
   }
}