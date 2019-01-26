import {Injectable} from '@angular/core';
import {Category} from '../models/Category.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  getCategories(): Category[] {
    return [{id: 1, name: 'לולבים', categoryID: 3}, {id: 2, name: 'אתרוגים', categoryID: 4}];
  }
}
