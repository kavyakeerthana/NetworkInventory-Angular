
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DummyComponent } from './dummy/dummy.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
import { AssetmodelComponent } from './assetmodel/assetmodel.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { AssignAssetComponent } from './assign-asset/assign-asset.component';
import { CartComponent } from './cart/cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MainComponent } from './main/main.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { UpdateAssetDetailComponent } from './update-asset-detail/update-asset-detail.component';

const routes: Routes = [
  {path:"login",
component: LoginComponent},
{path:"updateassetdetail/:id",
component: UpdateAssetDetailComponent},
{path:"signup",
component: SignupComponent},
{path:"updateasset",
component: UpdateAssetComponent},
{path:"dash",
component: DashboardComponent},
{path:"assetmodel",
component: AssetmodelComponent},
{path:"profile",
component: ProfileComponent},
{path:"cust/:id",
component: CustomerComponent},
{path:"list",
component:CustomerListComponent},
{path:"assignasset/:id",
component:AssignAssetComponent},
{path:"viewasset",
component:ViewAssetComponent},
{path:"dummy/:id",
component:DummyComponent},
{path:"viewdetail/:id",
component:ViewDetailComponent},
{path:"updatedetail/:id",
component:UpdateDetailComponent},
{path:"cart/:id",
component:CartComponent},
{path:"updatecart/:id",
component:UpdateCartComponent},
{path:"adminprofile",
component:AdminProfileComponent},
{path:"main",
component:MainComponent},
{path:"forgot",
component:ForgotComponent},
{path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


