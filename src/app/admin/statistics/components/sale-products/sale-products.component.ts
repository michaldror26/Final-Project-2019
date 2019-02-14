import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['אתרוגים','לולבים','הדסים','ערבות'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:number[] = [7, 6, 5,4];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      5,4,3,2
      ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone.data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}
}
