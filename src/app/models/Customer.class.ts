import {User} from "./User.class";

export interface Customer extends User {
  id: string;
  // userId: number;
  joiningDate: Date;
  discountPercentage: number;
}
