import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productDetail: any;
  selectedId: number = 1;
  selectedQuantity: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.productDetail = {
      "id": 1,
      "productImages": [
        {
          "id": 1,
          "src": "./assets/img/product-1.png",
          "thumbNailSrc": "http://placekitten.com/200/126",
        },
        {
          "id": 2,
          "src": "./assets/img/product-4.png",
          "thumbNailSrc": "http://placekitten.com/200/126",
        },
        {
          "id": 3,
          "src": "./assets/img/product-2.png",
          "thumbNailSrc": "http://placekitten.com/200/126",
        },
        {
          "id": 4,
          "src": "./assets/img/product-3.png",
          "thumbNailSrc": "http://placekitten.com/200/126",
        },
        {
          "id": 5,
          "src": "./assets/img/product-4.png",
          "thumbNailSrc": "http://placekitten.com/200/126",
        }
      ]
    }
  }

}
