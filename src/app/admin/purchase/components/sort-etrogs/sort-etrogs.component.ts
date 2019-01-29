import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/admin/services/inventory.service';
import { Product } from 'src/app/shared/models/Product.class';
import { NgForm, FormGroup, FormArray, FormControl ,FormBuilder} from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection'
import { equal } from 'assert';
@Component({
  selector: 'app-sort-etrogs',
  templateUrl: './sort-etrogs.component.html',
  styleUrls: ['./sort-etrogs.component.css'],
})
export class SortEtrogsComponent implements OnInit {

  startAmount:number;
  currentAmount:number;
  productsArr:Product[]=[];
  temp:Product[]=[];//[{"ProductId":1006,"Name":"אתרוג כשר","CategoryId":2,"SellingPrice":200.0, },{"ProductId":1009,"Name":"אתרוג תימני ג'ארד","CategoryId":3,"SellingPrice":200.0, },{"ProductId":1012,"Name":"אתרוג מחפוד א","CategoryId":1006,"SellingPrice":200.0, },{"ProductId":1021,"Name":"אתרוג מחפוד ב","CategoryId":1006,"SellingPrice":200.0, },{"ProductId":1022,"Name":"אתרוג מחפוד ג","CategoryId":1006,"SellingPrice":200.0, },{"ProductId":1023,"Name":"אתרוג מאזוז א","CategoryId":1007,"SellingPrice":200.0, },{"ProductId":1024,"Name":"אתרוג מאזוז ב","CategoryId":1007,"SellingPrice":200.0, },{"ProductId":1025,"Name":"אתרוג מאזוז ג","CategoryId":1007,"SellingPrice":200.0, },{"ProductId":1026,"Name":"אתרוג אשכנזי פתוח א","CategoryId":1008,"SellingPrice":200.0, },{"ProductId":1027,"Name":"אתרוג אשכנזי פתוח ב","CategoryId":1008 ,"SellingPrice":200.0, },{"ProductId":1028,"Name":"אתרוג אשכנזי פתוח ג","CategoryId":1008 ,"SellingPrice":200.0, },{"ProductId":1029,"Name":"אתרוג מהודר","CategoryId":2 ,"SellingPrice":200.0, },{"ProductId":1031,"Name":"אתרוג ג'ארד","CategoryId":2 ,"SellingPrice":0.0,"Amount":500},{"ProductId":2030,"Name":"קוישלעך","CategoryId":1 ,"SellingPrice":10.0, }];
  form = new FormGroup({
    products: new FormArray([]),
  });
 
  get products(): FormArray { return this.form.get('products') as FormArray; }

  constructor(private fb:FormBuilder,
              private inventoryService:InventoryService) {
    this.startAmount=this.currentAmount=500;
    this.productsArr=this.temp;
  
    this.temp.forEach(element => {
      this.products.push(this.fb.group(element));
    });

    }
  //  this.inventoryService.getAmountProject().subscribe(
  //    data => {this.startAmount=this.currentAmount=data},
  //   error=> {},
  //  );

  //  this.inventoryService.getAllSubCategories().subscribe(
  //   data => {this.productsArr=data;},
  //  error=> {},
  // );
  

  ngOnInit() {
  }
  updateCurrentAmount(val:number){
   this.currentAmount-=val;
  }
  CancelUpdateCurrentAmount(val:number){
   this.currentAmount= +this.currentAmount+ +val;
  }
  reset(){
    console.log("enter to reset");
   // this.products.reset({Amount=0});
    console.log('after reset'+ this.form.value);
  }

  enterToDB(){
    let ret:object[]=[];
  this.form.value.products.forEach(p => {
  //   if((p as Product).Amount != 0)
  //   ret.push({id:(p as Product).ProductId,amount:(p as Product).Amount});
   });
  console.log(ret);
 // this.inventoryService.updateAmount(ret);
  }
}
