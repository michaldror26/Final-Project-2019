export class YearData {
   
    public allMonthData:number[];
    public  allLastYearMonthData:number[];
    public allSumMonthData: number[]=[];
    public allAggregateMonthData:number[]=[];
    public allLastAggregateMonthData:number[]=[];

    constructor(data:number[],lastData:number[]){
        this.allMonthData=data;
        this.allLastYearMonthData=lastData;
        let sum=0;
        let LastSum=0;
    
      for(let i=0;i<12;i++)
      {
          sum+=this.allMonthData[i];
          LastSum+=this.allLastYearMonthData[i];
          this.allAggregateMonthData[i]=sum;
         // this.allLastAggregateMonthData[i]=LastSum;
          
         
          this.allSumMonthData[i]= this.allLastYearMonthData[i]!=0? ((this.allMonthData[i]-this.allLastYearMonthData[i])/this.allLastYearMonthData[i])*100:0

          
      }
    }
}
