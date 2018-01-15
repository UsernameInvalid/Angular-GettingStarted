import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service'
import { ProductGuardService } from './product-guard.service';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit(): void{
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id)
        .subscribe( product => {
          this.product = product;
        },
          error => this.errorMessage = <any>error);
    this.pageTitle += `: ${id}`;


    // this.product = {
    //   "productId": 1,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2016",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
