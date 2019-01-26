import { User } from './User.class';


export class Customer extends User {

  public CustomerId: number;
  public RegisteredDate: any; // Date
  public DiscountPercentage: number;

  public SiteUserId?: number;
  public SiteUser?: any;
  public SaleOrders?: any[];
  public SaleShippingCertificates?: any[];
  public CustomerPayments?: any[];
  //
  // // Create SiteUser & User at once
  //   constructor(discountPercentage: number,
  //               firstName: string,
  //               lastName: string,
  //               mobilePhone: string,
  //               city: string,
  //               email: string,
  //               telephone?: string) {
  //
  //     super( firstName , lastName, mobilePhone, city, email, telephone);
  //     this.discountPercentage = discountPercentage;
  //     this.registeredDate = new Date();
  //   }
}
