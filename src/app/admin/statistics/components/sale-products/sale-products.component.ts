import { Component, OnInit } from '@angular/core';
import { BIService } from '../../services/BIService';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent {
  constructor(private biService:BIService){}
  loaded=true;
  async ngOnInit() {
   let cnt:number=0;
  //!false!!!  
//  await this.biService.getSaleValue().subscribe(
//     data=>{
 
//   delete data['$id'];
  
//      this.barChartLabels= Object.keys(data);
      
//       this.barChartData=Object.values(data);
//       cnt++;
//       this.loaded=cnt==2;
//   } );


//   await this.biService.getSaleCustomer().subscribe(
//     data=>{
//     delete data['$id'];
  
//      this.barChartLabels1=Object.keys(data);
      
//       this.barChartData1=Object.values(data);
//       console.log(this.barChartData1);
//       console.log(this.barChartLabels1);

//       cnt++;
//       this.loaded=cnt==2;
//   });
 
  }

    
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[]=[] ;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:number[]=[] ;
 

  public barChartLabels1:string[]=[] ;
  public barChartType1:string = 'bar';
  public barChartLegend1:boolean = true;
 
  public barChartData1:number[]=[] ;
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    // let data = [
    //   5,4,3,2
    //   ];
    // let clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone.data = data;
    // this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */


     console.log(this.barChartData,this.barChartLabels);
     
}
}
