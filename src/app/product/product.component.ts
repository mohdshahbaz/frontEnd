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

  ngOnInit(): void {
    // const new_product = {
    //   name : "aston martin",
    //   price: "330k",
    //   description: "a really cool car",
    //   image: "ksdjk24kjjdkjfkj"
    // }

    // this.productService.storeOnLocalStorage(new_product);
  }

  addProduct() {
    // var len = this.productService.getDataFromLocalStorage.length;
     const new_product = {
       id : this.generateId(),
       name : this.name,
       price: this.price,
       description: this.description,
       image: this.image_base64
     }
    
    this.productService.storeOnLocalStorage(new_product);
    this.onChangeDataSource();
  }

  generateId () {
    return '_' + Math.random().toString(36).substr(2,6);
  }

  removeProduct(product: any) {
    this.productService.removeProductFromStorage(product);
    this.onChangeDataSource();
  }


  getBase64(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        this.image_base64 = reader.result;
    }

    }

  PRODUCT_DATA: Product [] = this.productService.getDataFromLocalStorage();
  
  displayedColumns: string[] = ['image', 'name', 'description', 'price', 'action'] 
  dataSource = this.PRODUCT_DATA;

  onChangeDataSource() {
    this.dataSource = this.productService.getDataFromLocalStorage();
    // this.dataSource = this.PRODUCT_DATA;
  }

}
