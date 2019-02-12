import {User} from './User.class';

export class SiteUser {

    Id:number;
    
   UserName:string;
Password:string;

   // [foreignkey("user")]
    //public int UserId { get; set; }
    //public virtual User user { get; set; }

    JoiningDate:any//date

    AuthenticationTypeId:number;
   AuthenticationType:any;
}
