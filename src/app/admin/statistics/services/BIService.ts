import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ROOT_URL } from 'src/app/shared/config';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { url } from 'inspector';

@Injectable()
export class BIService {
  salesByYearsArr: Map<number, number[]> = new Map<number, number[]>();
  
  
  constructor(private httpClient:HttpClient){
    // this.salesByYearsArr.set(2019,[500,600,700,800,900,20,700,800,900,1000,110,120]);
    // this.salesByYearsArr.set(2018,[900,100,700,800,900,20,700,800,900,100,100,120]);
    // this.salesByYearsArr.set(2017,[100,100,100,100,100,10,100,800,900,100,100,120]);
  }

   getSaleProducts():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/product')
    .pipe(
    map(
      data => { 
        delete data['$id'];
      
          return data},
      error =>{}
  ));
 }

 getAmountSaleProducts():Observable<object>{
  return this.httpClient.get(ROOT_URL+'bi/sale/amount/product')
  .pipe(
  map(
    data => { 
      delete data['$id'];
    
        return data},
    error =>{}
));
}

 getSaleCustomers():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/customer')
    .pipe(
    map(
      data => {           
        delete data['$id'];
          return data},
      error =>{}
  ));
 }
 
 getAmountSaleCustomers():Observable<object>{
  return this.httpClient.get(ROOT_URL+'bi/sale/amount/customer')
  .pipe(
  map(
    data => {           
      delete data['$id'];
        return data},
    error =>{}
));
}

 getSaleMonths(year?:number):Observable<number[]>{
   let url:string;
   if(year!=undefined){ url = `${ROOT_URL}bi/sale/${year}/month`;}
   else { url = `${ROOT_URL}bi/sale/month`;}
  return this.httpClient.get(url)
  .pipe(
  map(
    data => {           
      
     
        return data as number[]},
    error =>{}
));
}

getAmountSaleMonths(year?:number):Observable<number[]>{
   let url:string;
   if(year!=undefined){ url = `${ROOT_URL}bi/sale/${year}/amount/month`;}
   else { url = `${ROOT_URL}bi/sale/month`;}
  return this.httpClient.get(url)
  .pipe(
  map(
    data => {           
      
     
        return data as number[]},
    error =>{}
));
}
// async getSaleMonths1(year?:number):Promise<number[]>
// {
//   let data:number[];
//    if(year==undefined)
//       year=new Date().getFullYear();
//    data= this.salesByYearsArr.get(year);
//    if(data==undefined)
//    alert();
//   //  await this.getSaleYearMonths(year).subscribe(
//   //    data=> this.salesByYearsArr[year]=data=Object.values(data),
//   //    error=> console.log('error!!!!')
//   //  );
//    return data;
      
// }

// getSaleYearMonths(year:number):Observable<object>{
//   return this.httpClient.get(ROOT_URL+'bi/sale/'+year+'/month')
//   .pipe(
//   map(
//     data => {           
//       delete data['$id'];
//         return data},
//     error =>{}
// ));
// }
}
