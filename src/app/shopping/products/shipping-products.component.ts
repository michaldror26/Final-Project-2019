import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {FiltersComponent} from './components/filters/filters.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {Product} from 'src/app/shared/models/Product.class';
import {Category} from 'src/app/shared/models/Category.class';

@Component({
  selector: 'app-shipping-products',
  templateUrl: './shipping-products.component.html',
  styleUrls: ['./shipping-products.component.scss']
})
export class ShippingProductsComponent implements OnInit {
  @Input()
  type: string;
  products: Product[];
  categories: Category[] = [];
  mainFilter: any;

  currentSorting: string;

  @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  @ViewChild('searchComponent')
  searchComponent: SearchBarComponent;

  sortFilters: any[] = [
    {name: 'שם (א-ת)', value: 'name'},
    {name: 'מחיר (מהנמוך לגבוה)', value: 'priceAsc'},
    {name: 'מחיר (מהגבוה לנמוך)', value: 'priceDes'}
  ];

  priceFilters: any[] = [
    {name: 'הכל', value: 'all', checked: true},
    {name: 'מחיר > 30.000', value: 'more_30000', checked: false},
    {name: 'מחיר < 10.000', value: 'less_10000', checked: false}
  ];

  originalData: Product[] = [];

  constructor(private dataService: DataService, private cartService: CartService) {

  }

  async ngOnInit() {
    if (this.type) {
      console.log('type=' + this.type);
      this.cartService.type = this.type;
    }
    this.products = this.originalData;
    if (!this.originalData || this.originalData.length == 0) {

      await this.dataService.getProductsFromServer().subscribe(d => this.originalData = this.products = d);
      await this.dataService.getCategoriesFromServer().subscribe(d => this.mainFilter.categories = this.categories = d);
      // this.originalData = this.products =  [
      //   { ID: 1, CategoryId: 2, Name: 'product1', SellingPrice: 25  },
      //   { ID: 2, CategoryId: 3, Name: 'product2', SellingPrice: 125  },
      //   { ID: 3, CategoryId: 3, Name: 'product3', SellingPrice: 255  },
      //   { ID: 4, CategoryId: 2, Name: 'product4', SellingPrice: 85  }
      // ];
    }
    this.mainFilter = {
      search: '',
      categories: this.categories,
      // customFilter: this.customFilters[0],
      priceFilter: this.priceFilters[0]
    };

    // Make a deep copy of the original data to keep it immutable
    //this.sortProducts('name');

  }

  ngOnDestroy() {
    this.cartService.saveCartLocaly();
  }

  onURLChange(url) {
    //  this.dataService.getRemoteData(url).subscribe(data => {
    //    this.originalData = data;
    //   this.mainFilter = {
    //     search: '',
    //     categories: this.originalData.categories.slice(0),
    //     customFilter: this.customFilters[0],
    //     priceFilter: this.priceFilters[0]
    //   };

    //   // Make a deep copy of the original data to keep it immutable
    //   //this.products = this.originalData.products.slice(0);
    //   this.products = this.originalData.slice(0);
    //   this.sortProducts('name');
    //     this.filtersComponent.reset(this.customFilters, this.priceFilters);
    //     this.searchComponent.reset();
    this.cartService.flushCart();
    //   });
  }


  onSearchChange(search) {
    this.mainFilter.search = search.search;
    this.updateProducts({
      type: 'search',
      change: search.change
    });
  }

  onFilterChange(data) {
    debugger;
    if (data.type == 'category') {
      if (data.isChecked) {
        this.mainFilter.categories.push(data.filter);
      } else {
        this.mainFilter.categories = this.mainFilter.categories.filter(category => {
          return category.ID !== data.filter.ID;
        });
      }
    } else if (data.type == 'custom') {
      this.mainFilter.customFilter = data.filter;
    } else if (data.type == 'price') {
      this.mainFilter.priceFilter = data.filter;
    }
    this.updateProducts({
      type: data.type,
      change: data.change
    });
  }

  updateProducts(filter) {
    let productsSource: Product[] = this.originalData;
    let prevProducts = this.products;
    let filterAllData = true;
    if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
      // productsSource = this.products;
      productsSource = this.originalData;
      filterAllData = false;
    }
    //console.log('filtering ' + productsSource.length + ' products')
    this.products = productsSource.filter(p => {
      //Filter by search
      if (filterAllData || filter.type == 'search') {
        if (!p.Name.match(new RegExp(this.mainFilter.search, 'i')) && !p.Name.includes(this.mainFilter.search)) {
          return false;
        }
      }


      //Filter by categories
      if (filterAllData || filter.type == 'category') {
        let passCategoryFilter = false;
        if (!passCategoryFilter) {
          passCategoryFilter = this.mainFilter.categories.reduce((found, category) => {
            return found || p.CategoryId === category.ID
              || p.Category.ParentCategory && p.Category.ParentCategory.ID === p.CategoryId
              || p.Category.ParentCategory && p.Category.ParentCategory.ParentCategory && p.Category.ParentCategory.ParentCategory.ID === category.ID
              || p.Category.ParentCategory && p.Category.ParentCategory.ParentCategory  && p.Category.ParentCategory.ParentCategory.ParentCategory && p.Category.ParentCategory.ParentCategory.ParentCategory.ID === category.ID;
          }, false);
        }
        if (!passCategoryFilter) {
          return false;
        }
      }

      //Filter by price filters
      if (filterAllData || filter.type == 'price') {
        let passPriceFilter = false;
        let customFilter = this.mainFilter.priceFilter.value;
        let productPrice = parseFloat(p.SellingPrice.toString().replace(/\./g, '').replace(',', '.'));
        if (customFilter == 'all') {
          passPriceFilter = true;
        } else if (customFilter == 'more_30000' && productPrice > 30000) {
          passPriceFilter = true;
        } else if (customFilter == 'less_10000' && productPrice < 10000) {
          passPriceFilter = true;
        }
        if (!passPriceFilter) {
          return false;
        }
      }

      return true;
    });

    //If the number of products increased after the filter has been applied then sort again
    //If the number of products remained equal, there's a high chance that the items have been reordered.
    if (prevProducts.length <= this.products.length && this.products.length > 1) {
      this.sortProducts(this.currentSorting);
    }

    //These two types of filters usually add new data to the products showcase so a sort is necessary
    if (filter.type == 'custom' || filter.type == 'price') {
      this.sortProducts(this.currentSorting);
    }
  }

  sortProducts(criteria) {
    console.log('sorting ' + this.products.length + ' products');
    this.products.sort((a, b) => {
      let priceComparison = parseFloat(a.SellingPrice.toString().replace(/\./g, '').replace(',', '.')) - parseFloat(b.SellingPrice.toString().replace(/\./g, '').replace(',', '.'));
      if (criteria == 'priceDes') {
        return -priceComparison;
      } else if (criteria == 'priceAsc') {
        return priceComparison;
      } else if (criteria == 'name') {
        let nameA = a.Name.toLowerCase(), nameB = b.Name.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      } else {
        // Keep the same order in case of any unexpected sort criteria
        return -1;
      }
    });
    this.currentSorting = criteria;
  }

  setOwer(Id: number) {
    this.cartService.owerId = Id;
  }
}
