import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/admin/services/inventory.service';
import { Product } from 'src/app/shared/models/Product.class';
import { NgForm } from '@angular/forms';

// import { InventoryService } from '../../../../admin/services/inventory.service';

@Component({
  selector: 'app-sort-etrogs',
  templateUrl: './sort-etrogs.component.html',
  styleUrls: ['./sort-etrogs.component.css']
})
export class SortEtrogsComponent implements OnInit {

  startAmount:number;
  currentAmount:number;
  productsArr:Product[]=[];
   constructor(private inventoryService:InventoryService) {

   this.inventoryService.getAmountProject().subscribe(
     data => {this.startAmount=this.currentAmount=data},
    error=> {},
   );

   this.inventoryService.getAllSubCategories().subscribe(
    data => {this.productsArr=data;},
   error=> {},
  );
  
    }

  ngOnInit() {
  }
  updateCurrentAmount(val:number){
    this.currentAmount-=val;
  }
  CancelUpdateCurrentAmount(val:number){
    this.currentAmount+=val;
  }
  reset(){
 
  }

  enterToDB(pform: NgForm){
   alert(pform);
  }
}
