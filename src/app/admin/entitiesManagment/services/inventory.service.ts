import {ROOT_URL} from '../../../shared/config'
import { Observable } from 'rxjs';
export class InventoryService{

constructor(){}

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