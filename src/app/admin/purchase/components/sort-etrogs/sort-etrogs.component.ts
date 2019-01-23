import { Component, OnInit } from '@angular/core';
// import { InventoryService } from '../../../../admin/services/inventory.service';

@Component({
  selector: 'app-sort-etrogs',
  templateUrl: './sort-etrogs.component.html',
  styleUrls: ['./sort-etrogs.component.css']
})
export class SortEtrogsComponent implements OnInit {

  startAmount:number= 500;
  // constructor(private inventoryService:InventoryService) {

  // this.inventoryService.getAmountProject().subscribe(
  //   data => {this.startAmount=data},
  //  error=> {},
  // );
  
  //  }

  ngOnInit() {
  }

}
