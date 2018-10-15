import { User } from "./User.class";


export class Customer extends User {

  public id: number;
  public customerRegisterDate:any ;//Date
  public discountPercentage: number;

//Create SiteUser & User at once
  constructor(id:number,
    discountPercentage: number,
              firstName:string,
              lastName: string,
              mobilePhone: string,
              city: string,
              email: string,
              telephone?: string) {

    super(firstName, lastName, mobilePhone, city, email, telephone);
    this.id=id;
    this.discountPercentage=discountPercentage;
    this.customerRegisterDate = new Date();
  }
}
