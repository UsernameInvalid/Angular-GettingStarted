import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService{

    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}