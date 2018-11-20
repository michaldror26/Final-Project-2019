import {User} from './User.class';

export class Employee extends User{
  public employeeId: number;
  public role: string;
  public salary: number; // float
}

