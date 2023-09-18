import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Images = ['assets/img/product-1.png', 'assets/img/product-2.png', 'assets/img/product-3.png'];

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
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
}
