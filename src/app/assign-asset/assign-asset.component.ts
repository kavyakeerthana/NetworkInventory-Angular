import { Component } from '@angular/core';
import { AssetService } from '../asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCart, Admin, Asset, Search } from '../admin';
import {MatTableModule} from '@angular/material/table';

import {MatSort} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.css']
})
export class AssignAssetComponent {

  asset1 : Asset[] =[];
  currentAssets: Asset[] = [];
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  cartitem:AddToCart=new AddToCart("","","","","","");
 
  id:any;
  searchText :any;


  items = this.assetService.getItems();
  constructor(private route:ActivatedRoute,private adminService:AdminService,private assetService : AssetService,private router:Router,private toastr: ToastrService){}
  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.admin1=new Admin("","","","","","","","","","","","","","","");
    this.adminService.goToCustomerPage(this.id).subscribe(data=>{
      this.admin1=data;
      
    })

    this.getAsset();
  }
  private getAsset(){
    this.assetService.getAssetList().subscribe(data=>{
     this.asset1=data;
     console.log(data);
    });
  }


  a: boolean= false;

  onClick(assetName:string){
    this.a=!this.a;
    this.currentAssets = this.asset1?.filter((element)=>{
      return element.assetname==assetName;
    });
  }

  updateAsset:Asset = new Asset("","","","");
  updateQuantity:Asset = new Asset("","","","");
  cart:AddToCart=new AddToCart("","","","","","");
  modelid:any;

  assetmodel:Asset = new Asset("","","","");

  addToCart(id:any,asset:Asset,id1:any){

    // this.cart=new AddToCart(id,asset.assetmodelId,asset.assetId,asset.assetname,asset.assetmodel);
    
    this.modelid=id1;
    console.log(this.modelid);
    this.updateQuantity=new Asset(asset.assetId,asset.assetname,asset.assetmodel,asset.assetquantity);
    if (this.updateQuantity.assetquantity>0){
      this.updateQuantity.assetquantity=this.updateQuantity.assetquantity-1;

      this.cart=new AddToCart(id,asset.assetmodelId,asset.assetId,asset.assetname,asset.assetmodel,asset.assetquantity);
      this.adminService.AssignAsset(this.cart).subscribe(data=>{
        // alert("Asset Assigned")
        console.log("Count-assign"+this.updateQuantity.assetquantity);
        this.toastr.show("Asset Assigned")
        console.log(data);
        });


    
    this.updateAsset=new Asset(this.updateQuantity.assetId,this.updateQuantity.assetname,this.updateQuantity.assetmodel,this.updateQuantity.assetquantity);
    
    // console.log(this.updateQuantity.assetmodelId);
    console.log(this.updateQuantity);
    this.assetService.UpdateAssetQuantity(this.modelid,this.updateAsset).subscribe(data=>{
      // alert("Quantity Updated")
      console.log(data);
      });
    }
    else{

      this.toastr.show("Out of Stock")
    }

    // setTimeout(()=>{window.location.reload();},1500);
    
    
    }

    // this.adminService.AssignAsset(this.cart).subscribe(data=>{
    //   alert("Asset Assigned")
    //   console.log(data);
    //   });
  }

  
 

