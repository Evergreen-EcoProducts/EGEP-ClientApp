import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiService } from '../http-api.service';
declare var jQuery: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Images = ['assets/img/product-1.png', 'assets/img/product-2.png', 'assets/img/product-3.png'];
  products: any;
  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true, navText: ['<i class="bi bi-arrow-left-circle"></i>', '<i class="bi bi-arrow-right-circle"></i>'] };
  
  constructor(private httpApiService: HttpApiService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  async ngOnInit() {
    await this.getProducts();
  }
  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        $(".product-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 45,
          dots: false,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            },
            1200: {
              items: 4
            }
          }
        });
      });
    })(jQuery);
  }
  async getProducts() {
    await this.httpApiService.getProducts().toPromise().then((res: any[] | undefined) => {
      if (res) {
        this.products = res;
      }
    });
  }
  onProductDetail(id:any) {
    this.router.navigate(['product-detail/' + id]);
    window.scroll({
      top: 700,
      left: 0,
      behavior: 'smooth'
    });
  }
}
