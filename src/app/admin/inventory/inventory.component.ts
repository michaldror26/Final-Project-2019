import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InventoryService} from '../services/inventory.service';
// import {parseAndResolve} from '../.././shared/services/CommonMethods';
import {parseAndResolve} from 'src/app/shared/services/CommonMethods.js';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory: any[];
  inventoryReal;
  countFrom: number;
  countTo: number;

  constructor(private _http: HttpClient,
              private _service: InventoryService) {
  }

  async ngOnInit() {
    await this._service.getInventory().subscribe(x => this.inventoryReal = this.inventory = parseAndResolve((JSON.stringify(x))));
  }

  searchText(text) {
    console.log(text);
    this.inventory = this._service.search(text, this.inventoryReal, this.countFrom, this.countTo);


  }

}
