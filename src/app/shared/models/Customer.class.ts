import { User } from './User.class';


export class Customer extends User {

 public CustomerId:number;
  public RegisteredDate: any; // Date
  public DiscountPercentage: number;

 
  public SaleOrders?: any[];
  public SaleShippingCertificates?: any[];
  public CustomerPayments?: any[];

}
