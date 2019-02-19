import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select } from 'd3-selection';


@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  deafult: string;

  @Input()
  deafult_index:number | boolean[];
;
  
  @Input()
   type: string;

  @Input()
   dataset:any[];

   
 
  
  @Output()
  onFilterChange = new EventEmitter<any>()

  
  showFilters: boolean = true

  sideShown: boolean = false

  ngOnInit() {
    if(this.deafult&&this.type=="radio")
    {
           this.deafult_index=new Array(12);
          
           var index = this.dataset.findIndex(x => x== this.deafult); 
           this.deafult_index[index]=true;
         
    }
    
  }

  // reset(customFilters, priceFilters){
  //   this. = customFilters
  //   this.priceFilters = priceFilters
  //   this.showFilters = false
  //   setTimeout(() => {
  //     this.showFilters = true
  //   });
  // }

  onInputChange($event, index){
    let change = $event.target.checked ? 1: -1
    this.onFilterChange.emit({
     
      index: index,
      isChecked: $event.target.checked,
      change: change
    })
  }

  onSelectChange($event){
    let change = $event.target.checked ? 1: -1
    this.onFilterChange.emit({
     
      index: $event.target.selectedIndex,
      isChecked: $event.target.checked,
      change: change
    })
  }

    
  
}
