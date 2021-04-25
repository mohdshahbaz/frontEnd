import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Products: any = [];
  

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
      debugger;
      this.Products = this.productService.getDataFromLocalStorage();
  }

}
