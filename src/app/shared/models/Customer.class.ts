import { User } from './User.class';
import {SiteUser} from './SiteUser.class';


export class Customer extends User {

  public CustomerId: number;
  public RegisteredDate: any; // Date
  public DiscountPercentage: number;

  public SiteUserId?: number;
  public SiteUser?: SiteUser;
  public SaleOrders?: any[];
  public SaleShippingCertificates?: any[];
  public CustomerPayments?: any[];
}
