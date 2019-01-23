import {ROOT_URL} from '../../../shared/config';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/models/User.class';

export class InventoryService {

constructor(private httpClient: HttpClient){}

login(userName:string, password:string):Observable<any> {
    return this.httpClient
       .get<User>(ROOT_URL + 'user/login?userName='+userName+ '&password='+ password)
       .pipe(
       map(
         data => {this.currentUser.set(data);
                  this.authService.setRouter()},
         error =>{catchError(this.handleError)}
     )); 
   }
}
