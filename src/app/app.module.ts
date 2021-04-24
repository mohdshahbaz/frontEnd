import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ProductService } from './product.service';
import {MatTableModule} from '@angular/material/table';

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'product', component: ProductComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
