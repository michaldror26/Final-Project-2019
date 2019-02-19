import { Product } from "../shared/models/Product.class";

export const DATA: any  = {
  'categories': [
    {
      'categori_id': 1,
      'name': 'אתרוגים'
    },
    {
      'categori_id': 2,
      'name': 'לולבים'
    },
    {
      'categori_id': 3,
      'name': 'הדסים'
    },
    {
      'categori_id': 4,
      'name': 'ערבות'
    }
  ],
  'products': [
    {
      'id': 1,
      'name': 'מוצר1',
      'price': '60.000',
      'available': true,
      'best_seller': true,
      'categories': [
        1,
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 2,
      'name': 'מוצר2',
      'price': '60.000',
      'available': true,
      'best_seller': true,
      'categories': [
        3,
        5
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    }
  ]
};
// temp:Product[]=[
//   {"ID":1006,
//   "Name":"אתרוג כשר",
//   "CategoryId":2,
//   "SellingPrice":200.0,z
//   "Amount":0
// },
// {"ID":1009,
// "Name":"אתרוג תימני ג'ארד",
// "CategoryId":3,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1012,
// "Name":"אתרוג מחפוד א",
// "CategoryId":1006,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1021,
// "Name":"אתרוג מחפוד ב",
// "CategoryId":1006,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1022,
// "Name":"אתרוג מחפוד ג",
// "CategoryId":1006,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1023,
// "Name":"אתרוג מאזוז א",
// "CategoryId":1007,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1024,
// "Name":"אתרוג מאזוז ב",
// "CategoryId":1007,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1025,
// "Name":"אתרוג מאזוז ג",
// "CategoryId":1007,
// "SellingPrice":200.0,
// "Amount":0},
// {"ID":1026,
// "Name":"אתרוג אשכנזי פתוח א",
// "CategoryId":1008,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1027,
// "Name":"אתרוג אשכנזי פתוח ב",
// "CategoryId":1008 ,
// "SellingPrice":200.0,
// "Amount":0},
// {"ID":1028,
// "Name":"אתרוג אשכנזי פתוח ג",
// "CategoryId":1008 ,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1029,
// "Name":"אתרוג מהודר",
// "CategoryId":2 ,
// "SellingPrice":200.0,
// "Amount":0
// },
// {"ID":1031,
// "Name":"אתרוג ג'ארד",
// "CategoryId":2 ,
// "SellingPrice":0.0,
// "Amount":500
// },
// {"ID":2030,
// "Name":"קוישלעך",
// "CategoryId":1 ,
// "SellingPrice":10.0,
// "Amount":0
// },
// ];
