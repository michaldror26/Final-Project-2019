import {User} from './User.class';

export class SiteUser extends User {

  public id: number;
  public userName: string;
  public password: string;
  public authenticationTypeId: number;
  public RegisterDate: Date;
}
