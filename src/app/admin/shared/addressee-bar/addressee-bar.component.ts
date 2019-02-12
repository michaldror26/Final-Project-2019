import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/shared/models/Customer.class';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-addressee-bar',
  templateUrl: './addressee-bar.component.html',
  styleUrls: ['./addressee-bar.component.css']
})
export class AddresseeBarComponent implements OnInit {



@Input()
addressees =[]
  @Output()
  onSelect = new EventEmitter<string>()

  constructor() { }
  
  ngOnInit() {

  }

  onSelectChange($event){
    this.onSelect.emit($event.target.value)
  
  }

}


