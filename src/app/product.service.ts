import { Inject, Injectable } from '@angular/core';
import {  LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {MatTableModule} from '@angular/material/table';


// key that is used to access the data in local storageconst 
// STORAGE_KEY = 'local_product';

export interface Product {
  id: number;
  name: any;
  price: any;
  description: any;
  image: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(product: any): void {
    // get array of products from local storage
    const currentProductList = this.storage.get('local_product') || [];

    // push new product to the list
    currentProductList.push(product)

    // insert updated array to local storage
    this.storage.set('local_product', currentProductList);

    // logs data
    console.log(this.storage.get('local_product') || 'Local storage is empty')

  }

  public getDataFromLocalStorage() {
    return this.storage.get('local_product');
  }

  // remove data from local storage
  public removeProductFromStorage(product:any) {
    debugger;
    var products:any[] = this.storage.get('local_product');

    if(products == null) {
      return ('Products are empty')
    } 

    if(products.length == 1) {
      this.storage.remove('local_product')
      return;
    }
    
    {
      this.storage.remove('local_product');
      products = products.filter(products =>{ if (products != product) return product;});
      this.storeOnLocalStorage(products)

    }

  }

}
