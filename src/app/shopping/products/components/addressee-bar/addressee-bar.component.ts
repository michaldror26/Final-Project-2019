import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { Customer } from 'src/app/shared/models/Customer.class';
import { BehaviorSubject } from 'rxjs';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ProviderService } from 'src/app/shared/services/provider.service';

@Component({
  selector: 'app-addressee-bar',
  templateUrl: './addressee-bar.component.html',
  styleUrls: ['./addressee-bar.component.css']
})
export class AddresseeBarComponent implements OnInit {



@Input()
type:string;

addressees =[]
  @Output()
  onSelect = new EventEmitter<string>()
  service: any;

  constructor(private injector:Injector) {
  }
  
  ngOnInit() {
      console.log("type="+this.type);
    if(this.type=='sale'){
    this.service=this.injector.get<any>(CustomerService);
    //getAll!!!!!!!!!!!
    //ID!!!!!!!!!!!!!!!
    this.service.getCustomers().subscribe(d=>{this.addressees=d;});
    }
    else{
    if(this.type=='purchase')
    this.service= this.injector.get<any>(ProviderService);
    }
    
  }

  onSelectChange($event){
    this.onSelect.emit($event.target.value)
  
  }

}


