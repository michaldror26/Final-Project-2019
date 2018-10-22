
////////////////////////// to delete that

import {Type} from '@angular/core';

export class Entity {
  components: [{ FeedListCmp: Type<any> }, { EditItemCmp: Type<any> }, { DeleteItemCmp: Type<any> }, { CreateItemCmp: Type<any> }];
  category: 'Customer' | 'Provider' | 'Product' | 'ProductCategory' | 'Employee';
  data: { items: any[], title: string };
}
