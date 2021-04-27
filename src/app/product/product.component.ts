import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

export interface Product {
  id: any;
  name: any;
  price: any;
  description: any;
  image: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  name = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  image = new FormControl(''); 

  image_base64: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {}

  addProduct() {
    // creates product object using form data.
     const new_product = {
       id : this.generateId(),
       name : this.name,
       price: this.price,
       description: this.description,
       image: this.image_base64
     }
    
    // saves product object to local storage using product service and updates view.
    this.productService.storeOnLocalStorage(new_product);
    this.onChangeDataSource();
  }

  // generates unique id for product object.
  generateId () {
    return '_' + Math.random().toString(36).substr(2,6);
  }

  // removes product object from local storage and updates view.
  removeProduct(product: any) {
    this.productService.removeProductFromStorage(product);
    this.onChangeDataSource();
  }

  // gets base64 value for the image.
  getBase64(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        this.image_base64 = reader.result;
      }
    }

  // retrieves products data from local storage using product service.
  PRODUCT_DATA: Product [] = this.productService.getDataFromLocalStorage();
  
  // set "columns to display" for material table. 
  displayedColumns: string[] = ['image', 'name', 'description', 'price', 'action']

  // assing retrieved products data to materiable table dataSource. 
  dataSource = this.PRODUCT_DATA;

  // refresh data source by re-retrieving on addition or removal of product object.
  onChangeDataSource() {
    this.dataSource = this.productService.getDataFromLocalStorage();
  }
}
