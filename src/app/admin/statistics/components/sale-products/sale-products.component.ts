import { Component, OnInit } from '@angular/core';
import { BIService } from '../../services/BIService';


@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent {
  constructor(private biService:BIService){}
  loaded=false;
  public saleMonthLabels:string[]=[];
  public saleMonthData:any[]=[];
  async ngOnInit() {
    let cnt:number=0;
 
 await this.biService.getSaleProducts().subscribe(
    data=>{
 
   
     this.barChartLabels= Object.keys(data);
      
      this.barChartData=Object.values(data);
      cnt++;
      this.loaded=cnt==2;
  } );


  await this.biService.getSaleCustomers().subscribe(
    data=>{
  
     this.barChartLabels1=Object.keys(data);
      
      this.barChartData1=Object.values(data);
      cnt++;
      this.loaded=cnt==2;
  });
 
  await this.biService.getSaleMonths().subscribe(
    data=>{
  
     this.saleMonthLabels=Object.keys(data);
      
      this.saleMonthData=Object.values(data);
    //  cnt++;
    //  this.loaded=cnt==3;
      console.log(this.saleMonthLabels);
      console.log(this.saleMonthData);
  },
  error=>{console.log('error yehudit!!!');
  }
  );

  }

    
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[]=[] ;
  public barChartType:string = 'horizontalBar';
  public chartLegend:boolean = false;
  public chartOption = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
  public barChartData:number[]=[] ;
 

  public barChartLabels1:string[]=[] ;
 
 
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
