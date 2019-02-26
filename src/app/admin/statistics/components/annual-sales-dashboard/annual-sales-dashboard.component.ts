import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartPoint } from 'chart.js';
import { Color, BaseChartDirective, Label,MultiDataSet } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
//import 'chartjs-plugin-datalabels';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BIService } from '../../services/BIService';
import { FiltersComponent } from '../filters/filters.component';
import { YearData } from './year-data';



@Component({
  selector: 'app-annual-sales-dashboard',
  templateUrl: './annual-sales-dashboard.component.html',
  styleUrls: ['./annual-sales-dashboard.component.css']
})
export class AnnualSalesDashboardComponent implements OnInit {
  
  initYear:number=2005;
  cy:number=new Date().getFullYear();
  cm:number= new Date().getMonth();
  years:number[]=Array.from(Array(this.cy-this.initYear+1), (x,i) => i + this.initYear);
  months:string[]=["ינואר","פברואר", "מרץ" ,"אפריל" , "מאי" ,"יוני" ,"יולי" ,"אוגוסט" ,"ספטמבר" ,"אוקטובר" ,"נובמבר" ,"דצמבר"];;
  amountFlag=false;
  isDataLoaded=false;
private selectedYears:boolean[]=new Array(this.years.length);
private yearsData:Map<number,YearData>=new Map<number,YearData>();
  
public chartColors: Array<any> = [
  { // all colors in order
    backgroundColor: '#7cabde'
  },
  { // all colors in order
    backgroundColor: '#ffe29a'
  },
  { // all colors in order
    backgroundColor: '#ec94f3'
  },
  { // all colors in order
    backgroundColor: '#9ef394'
  }, { // all colors in order
    backgroundColor: '#ed97ef'
  },
  { // all colors in order
    backgroundColor: '#8ce09e',
  },
  { // all colors in order
    backgroundColor: '#f1ba77'
  },
  { // all colors in order
    backgroundColor: '#e2ec3f'
  },
];


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  @ViewChildren( BaseChartDirective )
 charts: QueryList<BaseChartDirective>;

 public barChartOptions: ChartOptions = {
  title: {
    text: 'מכירות לפי תקופות ',
    display: true
  },
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: { xAxes: [{}], yAxes: [{}] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};

public sumBarChartOptions: ChartOptions = {
  title: {
    text: ' אחוז שינוי במכירות מול שנה שעברה  ',
    display: true
  },
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: { xAxes: [{}], yAxes: [{}] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};
//public barChartPlugins = [pluginDataLabels];



public selectedMonthLabels:Label[]=[];
public chartMonthData: ChartDataSets[]=[{}];
public charSumMonthData: ChartDataSets[]=[{}];
public ChartAggregateMonthData:ChartDataSets[]=[{}];
public ChartMonthLabels:string[]=[];

public selectedMonths:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false];
  constructor(private biService:BIService) { }

  ngOnInit() {
    for(let i=0;i<this.selectedYears.length;i++)
    {
      this.selectedYears[i]=false;
    }
    this.selectedYears[this.cy-this.initYear]=true;
   
    for(let i=this.cm;i>-1;i--)
    {
      this.selectedMonths[i]=true;
    }
   
    this.initPriceData();
   
    //this.tempUpdateData(); 
  }
 
  async initPriceData()
  {
    alert("init price data");
    this.amountFlag=false;
    this.yearsData.clear();
  
    this.selectedYears.forEach((x,i)=>{ if(x==true) { 
      if(i+1==this.selectedYears.length) this.getYearFromDb(i+this.initYear,true)
      else  this.getYearFromDb(i+this.initYear)     } });
    

  }
  
  initAmountData()
  {
    alert("init amount data");
    this.amountFlag=false;
    this.yearsData.clear();
  
    this.selectedYears.forEach((x,i)=>{ if(x==true) { 
      if(i+1==this.selectedYears.length) this.getAmountYearFromDb(i+this.initYear,true)
      else  this.getYearFromDb(i+this.initYear)     } });
     
 
  }


async getYearFromDb(year:number,update?:boolean)
  {
    alert("get from db");
    let nextYearData:YearData=this.yearsData.get(year+1);
    let lastYearData:YearData=this.yearsData.get(year-1);
    let dataArr,lastdataArr;
    if(nextYearData==undefined)
    {
    await  this.biService.getSaleMonths(year).subscribe(
        data=>
        {
          dataArr=data;
         alert("data arive");
         if(lastdataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
        },
        error=>alert("error")
      );
    }

    else{
        dataArr=nextYearData.allLastYearMonthData;
        if(lastdataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
    }

    if(lastYearData==undefined)
    {
    await new Promise((resolve, reject) => {
      this.biService.getSaleMonths(year-1).subscribe(
        data=>
        {
          lastdataArr=data;
         
         alert("last data arive");
         if(dataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
        },
        error=>alert("error")
      );
  }); 
    }
     else
     {
       lastdataArr=lastYearData.allMonthData;
       if(dataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
     }
      
   this.func(year,dataArr,lastdataArr,update);
         
  
  }

  func(year,dataArr,lastdataArr,update?)
  {
    let yearData:YearData=new YearData(dataArr,lastdataArr);       
         this.yearsData.set(year,yearData);
         console.log(this.yearsData);
         alert("data save");
        
         update? this.updateCharts():null;
  }

 async getAmountYearFromDb(year:number,update?:boolean)
  {
    alert("get from db");
    let nextYearData:YearData=this.yearsData.get(year+1);
    let lastYearData:YearData=this.yearsData.get(year-1);
    let dataArr,lastdataArr;
    if(nextYearData==undefined)
    {
    await  this.biService.getAmountSaleMonths(year).subscribe(
        data=>
        {
          dataArr=data;
         alert("data arive");
         if(lastdataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
        },
        error=>alert("error")
      );
    }

    else{
        dataArr=nextYearData.allLastYearMonthData;
        if(lastdataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
    }

    if(lastYearData==undefined)
    {
    await 
      this.biService.getAmountSaleMonths(year-1).subscribe(
        data=>
        {
          lastdataArr=data;
         
         alert("last data arive");
         if(dataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
        },
        error=>alert("error")
      );
 
    }
     else
     {
       lastdataArr=lastYearData.allMonthData;
       if(dataArr!=undefined)this.func(year,dataArr,lastdataArr,update);
     }
      
   this.func(year,dataArr,lastdataArr,update);
        
  }

  

  

  tempUpdateData()
  {
    
      this.updateCharts();
  }

  updateCharts()
  {
   
    alert("okkkkkkkkk");
   
    this.selectedMonthLabels=[];
    this.chartMonthData=[];
    this.charSumMonthData =[];
    this.ChartAggregateMonthData=[];

    let selectedMonthData=[];
    let selectedAggregateMonthData=[];
    let selectedSumMonthData=[];
    for(let i=0;i<this.selectedYears.length;i++)
    {
      
        if(this.selectedYears[i]==true) 
        {
          let year=this.initYear+i;
         
        let obj:YearData=this.yearsData.get(year);
        
          for(let j=0;j<12;j++)
          {
           
            if(this.selectedMonths[j]==true)
             {
               selectedMonthData.push(obj.allMonthData[j]);;
               selectedAggregateMonthData.push(obj.allAggregateMonthData[j]);
               selectedSumMonthData.push(obj.allSumMonthData[j]);
             }
          }
          this.ChartAggregateMonthData.push({data:selectedAggregateMonthData, label:year+""});
           this.charSumMonthData.push({data:selectedSumMonthData, label:year+""});
           this.chartMonthData.push({data:selectedMonthData, label:year+""});
           selectedMonthData=[];
           selectedAggregateMonthData=[];
           selectedSumMonthData=[];
      }
    
      
    }

    // setTimeout( () => {
      for(let i=0;i<12;i++)
          if(this.selectedMonths[i]==true)
             this.selectedMonthLabels.push(this.months[i]);
    // });
   
    this.isDataLoaded=false;
     setTimeout(() => {
      this.isDataLoaded=true;
     }, 0); 
     
       this.charts.forEach((c) => {     
        c.ngOnChanges({});      
        alert();
    });
    
  }


  onFilterChange(data,type)
  {
    let temp=this.charts.toArray();
    if(type=="month")
    {
        this.selectedMonths[data.index]=data.isChecked;
         this.updateCharts();
      
         // var j=this.selectedMonthLabels.indexOf(this.months[this.selectedMonths.slice(0, data.index).lastIndexOf(true)])+1; }   
    }
    if(type=="year")
    {
     
        this.selectedYears[data.index]=data.isChecked;
        if(this.selectedYears[data.index]==true){
              if(this.yearsData[data.index]==undefined)
      
                   if(this.amountFlag==false)
                          this.getYearFromDb(data.index+this.initYear,true);
                   else
                           this.getAmountYearFromDb(data.index+this.initYear,true);
        }
         else
            this.updateCharts();
    }
  //   this.charts.forEach((c) => {
  //     alert();
  //     c.ngOnChanges({});
  //     c.chart.update();
  // });
    }
}
