import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;
  selectedId: number = 0;
  selectedImageId: number = 1;
  selectedQuantity: number = 1;
  selectedPrice: any;
  constructor(private route: ActivatedRoute, private httpApiService: HttpApiService) { }

  async ngOnInit() {
    this.selectedId = this.route.snapshot.params['id'];
    if (!!this.selectedId) {
      await this.getProductDetail();
    }

  }
  async getProductDetail() {
    await this.httpApiService.getProducts().toPromise().then((res: any | undefined) => {
      if (res && res.products) {
        this.productDetail = res.products.find((product: any) => {
          return product.id == Number(this.selectedId);
        });
        console.log(this.productDetail);
      }
    });
  }
  onSizeChange(event: any) {
    this.selectedQuantity = event.size;
    this.selectedPrice = event.amount;
  }
}
