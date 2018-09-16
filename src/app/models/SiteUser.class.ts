import {User} from "./User.class";

export interface SiteUser extends User{
  userName: string;
  password: string;
  joiningDate: Date;
  authenticationTypeId: number;
}
