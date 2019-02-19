import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BaseChartDirective, SingleDataSet, Label } from 'ng2-charts';
import { BIService } from '../../services/BIService';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-periodic-sales-dashboard',
  templateUrl: './periodic-sales-dashboard.component.html',
  styleUrls: ['./periodic-sales-dashboard.component.scss']
})
export class PeriodicSalesDashboardComponent {

  public allProductsName:Label[]=[];
  public allProductsData: number[]=[];
  public productChartLabels:Label[]=[] ;
  public productChartData:number[]=[] ;
  
  public allCustomersName:Label[]=[];
  public allCustomersData: number[]=[];
  public customersChartLabels:Label[]=[] ;
  public customersChartData:number[]=[] ;

  public saleMonthData:number[];
  public saleLastYearMonthData:number[];
  startYear:number=2000;
  cy:number=new Date().getFullYear();
  cm:number= new Date().getMonth();
  years:number[]=Array.from(Array(this.cy-this.startYear+1), (x,i) => i + this.startYear);
  months:string[]=["ינואר","פברואר", "מרץ" ,"אפריל" , "מאי" ,"יוני" ,"יולי" ,"אוגוסט" ,"ספטמבר" ,"אוקטובר" ,"נובמבר" ,"דצמבר"];
  amountFlag: boolean=false;



  aggregateSalesLy: number;
  sum1: number;
  salesCmLy: number;
  sum2: number;
  salesCm: number;
  //>0
  salesLm: number;
  sum: number;
  aggregateSalesCy: number;
  
  lastUpdateTime:Date;

 @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  @ViewChildren( BaseChartDirective )
 charts: QueryList<BaseChartDirective>

  loadedCustomerGraph: boolean=false;
  loadedProductGraph: boolean=false;
  loadedMonthGraph: boolean=false;
  
  
  constructor(private biService:BIService){
    
  }


 
  async ngOnInit() {
    this.updateCharts();  
//this.tempUpdateCharts();  
  }
  tempUpdateCharts(): any {
   

        this.allCustomersName=['אלישבע שליסל','יעל ראבד'];
        this.customersChartLabels=['אלישבע שליסל','יעל ראבד'];
        this.allCustomersData=[5500,400];           
        this.customersChartData=[5500,400];
        
        this.allProductsName=['אתרוגים','לולבים','הדסים','ערבות'];
        this.productChartLabels=['אתרוגים','לולבים','הדסים','ערבות'];
        this.allProductsData=[5500,600,500,400];           
        this.productChartData=[5500,600,500,400];


        this.loadedCustomerGraph=true;
        this.loadedProductGraph=true;

        this.saleMonthData=[10,20,30,40,50,60,70,80,90,10,110,120];
  this.saleLastYearMonthData=[10,20,30,40,50,60,70,80,90,10,110,120];
  this.func();
  }

 

  updateCharts() {
    this.amountFlag=false;
    this.loadedCustomerGraph=this.loadedProductGraph=this.loadedMonthGraph=false;
    this.updateCustomerIncisionSales();
    this.updateProductsIncisionSales();
    this.updateMonthsIncisionSales();
  
  }
  
  updateAmountCharts() {
    alert();
    this.amountFlag=true;
    this.loadedCustomerGraph=this.loadedProductGraph=this.loadedMonthGraph=false;
    this.updateAmountCustomerIncisionSales();
    this.updateAmountProductsIncisionSales();
    this.updateAmountMonthsIncisionSales();
  
  }
  
    async updateAmountCustomerIncisionSales() {
      await  this.biService.getAmountSaleCustomers().subscribe(
          data=>{    
            this.allCustomersName=Object.keys(data);
            this.customersChartLabels=Object.keys(data);
            this.allCustomersData=Object.values(data);       
            this.customersChartData=Object.values(data);  
            
            this.loadedCustomerGraph=true;
        });
      }
  
 async updateAmountProductsIncisionSales(){
    await this.biService.getAmountSaleProducts().subscribe(
      data=>{
        
       this.allProductsName=Object.keys(data);      
       this.productChartLabels= Object.keys(data);
       this.allProductsData= Object.values(data);       
       this.productChartData=Object.values(data);  
       
       this.loadedProductGraph=true;
     
    } );
  }
  updateAmountMonthsIncisionSales(): any {
    let f:boolean=false; 
    this.biService.getAmountSaleMonths(this.cy).subscribe(
      data=>{
        this.saleMonthData=data;
       
        f==true? this.func(): f=true
       }
     );
   this.biService.getAmountSaleMonths(this.cy-1).subscribe(
     data=>{
        this.saleLastYearMonthData=data;
       f==true? this.func(): f=true
       }
     );
  }
  updateMonthsIncisionSales() { 
    let f:boolean=false; 
     this.biService.getSaleMonths(this.cy).subscribe(
       data=>{
         this.saleMonthData=data;
        
         f==true? this.func(): f=true
        }
      );
    this.biService.getSaleMonths(this.cy-1).subscribe(
      data=>{
         this.saleLastYearMonthData=data;
        f==true? this.func(): f=true
        }
      );
  }
  
  func() {
   
    this.funcmonth();
    
     this.aggregateSalesCy=this.saleMonthData.slice(0, this.cm+1).reduce((sum, current) =>sum + current, 0);

     this.aggregateSalesLy=this.saleLastYearMonthData.slice(0, this.cm+1).reduce((sum, current) =>sum + current, 0);

      this.sum1=this.aggregateSalesCy*100/this.aggregateSalesLy;
      

     this.loadedMonthGraph=true;
    
     
  }
  funcmonth() {
   
    this.salesCm=this.saleMonthData[this.cm];
    this.salesCmLy=this.saleLastYearMonthData[this.cm];
    this.salesLm= this.cm>0?this.saleMonthData[this.cm-1]:0;

    if(this.salesCm!=0)
    {
        this.sum= this.salesLm/this.salesCm*100;
        this.sum2= this.salesCmLy/this.salesCm*100;
    }
    else{
      this.sum=this.sum2=0;
    }
        
  }

 async updateCustomerIncisionSales() {
  await  this.biService.getSaleCustomers().subscribe(
      data=>{    
        this.allCustomersName=Object.keys(data);
        this.customersChartLabels=Object.keys(data);
        this.allCustomersData=Object.values(data);       
        this.customersChartData=Object.values(data);  
        
        this.loadedCustomerGraph=true;
    });
  }


 async updateProductsIncisionSales()
  {
   await this.biService.getSaleProducts().subscribe(
      data=>{
        
       this.allProductsName=Object.keys(data);      
       this.productChartLabels= Object.keys(data);
       this.allProductsData= Object.values(data);       
       this.productChartData=Object.values(data);  
       
       this.loadedProductGraph=true;
     
    } );
  }
  
 

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRati: false,
  };

 
  public chartLegend:boolean = false;
  public chartOption = {
    responsive: true,
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              
              return tooltipItem.xLabel ;
            
          }
      }
  },
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
  
  // events
  
 
  public chartHovered(e:any):void {
    console.log(e);
  }  

  onFilterChange(data,type)
  {
    let temp=this.charts.toArray();
   
     if(type == "customer"){
      let i= data.index; 
      
    //  if(data.isChecked==true && this.customersChartLabels.indexOf(data.filter) == -1) {
      if(data.isChecked==true){

       if(i>-1)
       { 
        var index = this.customersChartData.findIndex(x => x<= this.allCustomersData[i]); 
       
        if(index==-1){  
         this.customersChartData.push(this.allCustomersData[i]);
         this.customersChartLabels.push(this.allCustomersName[i]);
        }
        else{
          this.customersChartData.splice(index, 0, this.allCustomersData[i]);
          this.customersChartLabels.splice(index, 0, this.allCustomersName[i]);
        }
       }
     } 
    else{
      if(i>-1)
      {
        delete this.customersChartData[i];
        delete this.customersChartLabels[i];
        this.customersChartData.splice(i, 1);
        this.customersChartLabels.splice(i, 1);
      }
    }
  
    temp[1].ngOnChanges({});
    }

    if(type=="product"){ 
      let i= data.index;
      if(data.isChecked==true){
  
       if(i>-1)
       { 
        var index = this.productChartData.findIndex(x => x<= this.allProductsData[i]); 
        if(index==-1){    
         this.productChartData.push(this.allProductsData[i]);
         this.productChartLabels.push(this.allProductsName[i]);
        }
        else{
          this.productChartData.splice(index, 0, this.allProductsData[i]);
          this.productChartLabels.splice(index, 0, this.allProductsName[i]);
        }
       }
     }
    else{
      
      if(i>-1)
      {
        delete this.productChartData[i];
        delete this.productChartLabels[i];
        this.productChartData.splice(i, 1);
        this.productChartLabels.splice(i, 1);
      }
    }
    
    temp[0].ngOnChanges({});
    }

    if(type=="month")
    {
         this.cm=data.index;
         this.funcmonth();
    }

    if(type=="year")
    {
         this.cy=this.years[data.index];
         if(this.amountFlag==true)
        this.updateAmountMonthsIncisionSales();
        else
         this.updateMonthsIncisionSales();
    }

  }

  
  extendedView()
  {
    let temp=this.charts.toArray();
  //  temp[0].chart.canvas.parentNode.style.height = '10000000px';
    temp[0].chart.resize();
    alert();
  }
   
}
 

