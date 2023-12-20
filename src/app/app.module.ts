import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DummyComponent } from './dummy/dummy.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
import { ViewDetailComponent } from './view-detail/view-detail.component'
import { AssetmodelComponent } from './assetmodel/assetmodel.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { AssignAssetComponent } from './assign-asset/assign-asset.component';

import { MatTableDataSource } from '@angular/material/table'
import {  MatTableModule  } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { CartComponent } from './cart/cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MainComponent } from './main/main.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { UpdateAssetDetailComponent } from './update-asset-detail/update-asset-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    CustomerComponent,
    CustomerListComponent,
    DummyComponent,
    UpdateDetailComponent,
    ViewDetailComponent,
    AssetmodelComponent,
    ViewAssetComponent,
    AssignAssetComponent,
    CustomFilterPipe,
    CartComponent,
    UpdateCartComponent,
    AdminProfileComponent,
    MainComponent,
    ForgotComponent,
    UpdateAssetComponent,
    UpdateAssetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(
      {
      timeOut: 1000,
      positionClass: 'toast-top-center' ,
      preventDuplicates: true,
      
      }), 
    BrowserAnimationsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
