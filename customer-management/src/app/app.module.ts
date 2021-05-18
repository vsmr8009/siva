import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
