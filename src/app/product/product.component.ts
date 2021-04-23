import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName = new FormControl('');
  price = new FormControl('');
  productDescription = new FormControl('');
  productImage = new FormControl(''); 

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.productName.setValue('Smart watch');
  }

}
