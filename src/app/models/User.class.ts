// export interface User { ?
export abstract class User {
  public id: number;

  constructor(public firstName: string,
              public lastName: string,
              public mobilePhone: string,
              public city: string,
              public email: string,
              public telephone?: string) {
    //TODO to create user in DB
  }

}

