import {User} from "./User.class";

export class SiteUser extends User {

  public id: number;
  public userName: string;
  public password: string;
  public authenticationTypeId: number;
  public joiningDate: Date;


//Create SiteUser & User at once

  constructor(userName: string,
              password: string,
              authenticationTypeId: number,
              firstName: string,
              lastName: string,
              mobilePhone: string,
              city: string,
              email: string,
              telephone?: string) {

    super(firstName, lastName, mobilePhone, city, email, telephone);
    this.joiningDate = new Date();
    this.userName = userName;
    this.password = password;
    this.authenticationTypeId = authenticationTypeId;
  }


//Create SiteUser after Creating User
//   constructor(userName: string,
//               password: string,
//               authenticationTypeId: number) {
//
//   this.joiningDate = new Date();
//   this.userName=userName;
//   this.password=password;
//   this.authenticationTypeId=authenticationTypeId;
//   }

}
