import { SiteUser } from "./SiteUser.class";

export abstract class User {
  //public AuthenticationTypeId: number;
  public FirstName: string;
  public LastName: string;
  public MobilePhone: string;
  public Telephone?: string;
  public City: string;
  public Email: string;
  public SiteUserId?: number;
  public SiteUser?: SiteUser;
}

