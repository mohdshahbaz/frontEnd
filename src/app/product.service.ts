import { Inject, Injectable } from '@angular/core';
import {  LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {MatTableModule} from '@angular/material/table';

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
    const currentProductList = this.storage.get("local_product") || [];

    // push new product to the list.
    currentProductList.push(product)

    // insert updated products to local storage.
    this.storage.set("local_product", currentProductList);
  }

  // retrieves data from local storage.
  public getDataFromLocalStorage() {
    return this.storage.get("local_product");
  }

  // remove data from local storage.
  public removeProductFromStorage(product:any) {
      // gets data from local storage and saves it into currentProductList.
      const currentProductList = this.storage.get("local_product");

      // remove specific product from product list. 
      currentProductList.pop(product);

      // insert updated products to the local storage. 
      if(currentProductList != null) {
        this.storage.set("local_product", currentProductList);
      }
  }
}
