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



public selectedMonthLabels:Label[];
public chartMonthData: ChartDataSets[];
public charSumMonthData: ChartDataSets[];
public ChartAggregateMonthData:ChartDataSets[];
public ChartMonthLabels:string[];

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
    this.isDataLoaded=true;
    //this.tempUpdateData(); 
  }
  initPriceData()
  {
    alert("init price data");
    this.amountFlag=false;
    this.yearsData.clear();
    
 
   //  let requests :Promise<void>[]=[];
   // this.selectedYears.map((item,i) => {
   //    if(item==true)
   //      requests.push(this.getYearFromDb(this.initYear+i));
  // });
  //
  // Promise.all(requests).then(() =>{console.log('done');this.updateCharts();});
  
  }
  
  initAmountData()
  {
    this.amountFlag=true;
    this.yearsData.clear();
    this.selectedYears.forEach((x,i)=>{
      this.getAmountYearFromDb(this.initYear+i);
      if(i+1===this.selectedYears.length) 
          this.updateCharts();
    }); 
    
     
    
       
       
  }

async  getYearFromDb(year:number)
  {
    alert("get from db");
    let lastyear:YearData=this.yearsData[year+1];
    
    if(lastyear!=undefined)
    {
      let yearData:YearData=new YearData(lastyear.allMonthData,[1,2,3,4,5,6,7,8,9,10,11,12]);
      this.yearsData.set(year,yearData);
    }
     else
     {
      
   await  this.biService.getSaleMonths(year).subscribe(
       data=>
       {
        alert("data arive");
         let yearData:YearData=new YearData(data,[1,2,3,4,5,6,7,8,9,10,11,12]);
         alert(yearData);
         this.yearsData.set(year,yearData);
         console.log(this.yearsData);
         alert("data save");
       },
       error=>alert("error")
     );
    }
  }

 async getAmountYearFromDb(year:number)
  {
    let lastyear:YearData=this.yearsData[year+1];
    if(lastyear)
    {
      let yearData:YearData=new YearData(lastyear.allMonthData,[1,2,3,4,5,6,7,8,9,10,11,12]);
      this.yearsData.set(year,yearData);
    }
     else
     {
     await this.biService.getAmountSaleMonths(year).subscribe(
        data=>
        {
          let yearData:YearData=new YearData(data,[1,2,3,4,5,6,7,8,9,10,11,12]);
          
          this.yearsData.set(year,yearData);
        }
      );
     }    
    
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
         
        let obj:YearData=this.yearsData[year];
         alert(obj);
          for(let j=0;j<12;j++)
          {
           
            if(this.selectedMonths[j]==true)
             {
               selectedMonthData.push(obj.allMonthData[j]);;
               selectedAggregateMonthData.push(obj.allAggregateMonthData[j]);
               selectedSumMonthData.push(obj.allSumMonthData[j]);
               this.selectedMonthLabels.push(this.months[j]);
             }
          }
           this.ChartAggregateMonthData.push({data:selectedAggregateMonthData, label:year+""});
           this.charSumMonthData.push({data:selectedSumMonthData, label:year+""});
           this.chartMonthData.push({data:selectedMonthData, label:year+""}); 
      }
    
     
    }

     
     
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
        if(this.yearsData[data.index]==undefined)
        if(this.amountFlag=false)
           this.getYearFromDb(data.index+this.initYear);
        else
           this.getAmountYearFromDb(data.index+this.initYear);
        this.updateCharts();

    }
    this.charts.forEach((c) => {
      c.ngOnChanges({});
  });
    }
}
