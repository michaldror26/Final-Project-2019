import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/product.model';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-products',
  templateUrl: './shipping-products.component.html',
  styleUrls: ['./shipping-products.component.scss']
})
export class ShippingProductsComponent implements OnInit {

  products: Product[];

  mainFilter: any;

  currentSorting: string;

  @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  @ViewChild('searchComponent')
  searchComponent: SearchBarComponent;

  sortFilters: any[] = [
    { name: 'שם (א-ת)', value: 'name' },
    { name: 'מחיר (מהנמוך לגבוה)', value: 'priceAsc' },
    { name: 'מחיר (מהגבוה לנמוך)', value: 'priceDes' }
  ];

  customFilters: any[] = [
    { name: 'הכל', value: 'all', checked: true },
    { name: 'זמין', value: 'available', checked: false },
    { name: 'לא זמין', value: 'unavailable', checked: false },
    { name: 'רב מכר', value: 'bestseller', checked: false }
  ];

  priceFilters: any[] = [
    { name: 'הכל', value: 'all', checked: true },
    { name: 'מחיר > 30.000', value: 'more_30000', checked: false },
    { name: 'מחיר < 10.000', value: 'less_10000', checked: false }
  ];

  originalData: any = [];

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  ngOnInit() {
    this.dataService.getData().then(data => {
      this.originalData = data;
      this.mainFilter = {
        search: '',
        categories: this.originalData.categories.slice(0),
        customFilter: this.customFilters[0],
        priceFilter: this.priceFilters[0]
      };

      // Make a deep copy of the original data to keep it immutable
      this.products = this.originalData.products.slice(0);
      this.sortProducts('name');
    });
  }
  ngOnDestroy() {
    this.cartService.saveCartLocaly();
  }
  onURLChange(url) {
    this.dataService.getRemoteData(url).subscribe(data => {
      this.originalData = data;
      this.mainFilter = {
        search: '',
        categories: this.originalData.categories.slice(0),
        customFilter: this.customFilters[0],
        priceFilter: this.priceFilters[0]
      };

      // Make a deep copy of the original data to keep it immutable
      this.products = this.originalData.products.slice(0);
      this.sortProducts('name');
      this.filtersComponent.reset(this.customFilters, this.priceFilters);
      this.searchComponent.reset();
      this.cartService.flushCart();
    });
  }


  onSearchChange(search) {
    this.mainFilter.search = search.search;
    this.updateProducts({
      type: 'search',
      change: search.change
    });
  }

  onFilterChange(data) {
    if (data.type == 'category') {
      if (data.isChecked) {
        this.mainFilter.categories.push(data.filter);
      } else {
        this.mainFilter.categories = this.mainFilter.categories.filter(category => {
          return category.categori_id != data.filter.categori_id;
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
    let productsSource = this.originalData.products;
    let prevProducts = this.products;
    let filterAllData = true;
    if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
      productsSource = this.products;
      filterAllData = false;
    }
    //console.log('filtering ' + productsSource.length + ' products')

    this.products = productsSource.filter(product => {
      //Filter by search
      if (filterAllData || filter.type == 'search') {
        if (!product.name.match(new RegExp(this.mainFilter.search, 'i'))) {
          return false;
        }
      }

      //Filter by categories
      if (filterAllData || filter.type == 'category') {
        let passCategoryFilter = false;
        product.categories.forEach(product_category => {
          if (!passCategoryFilter) {
            passCategoryFilter = this.mainFilter.categories.reduce((found, category) => {
              return found || product_category == category.categori_id;
            }, false);
          }
        });
        if (!passCategoryFilter) {
          return false;
        }
      }

      //Filter by custom filters
      if (filterAllData || filter.type == 'custom') {
        let passCustomFilter = false;
        let customFilter = this.mainFilter.customFilter.value;
        if (customFilter == 'all') {
          passCustomFilter = true;
        } else if (customFilter == 'available' && product.available) {
          passCustomFilter = true;
        } else if (customFilter == 'unavailable' && !product.available) {
          passCustomFilter = true;
        } else if (customFilter == 'bestseller' && product.best_seller) {
          passCustomFilter = true;
        }
        if (!passCustomFilter) {
          return false;
        }
      }

      //Filter by price filters
      if (filterAllData || filter.type == 'price') {
        let passPriceFilter = false;
        let customFilter = this.mainFilter.priceFilter.value;
        let productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
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
    //console.log('sorting ' + this.products.length + ' products')
    this.products.sort((a, b) => {
      let priceComparison = parseFloat(a.price.replace(/\./g, '').replace(',', '.')) - parseFloat(b.price.replace(/\./g, '').replace(',', '.'));
      if (criteria == 'priceDes') {
        return -priceComparison;
      } else if (criteria == 'priceAsc') {
        return priceComparison;
      } else if (criteria == 'name') {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      } else {
        //Keep the same order in case of any unexpected sort criteria
        return -1;
      }
    });
    this.currentSorting = criteria;
  }
}