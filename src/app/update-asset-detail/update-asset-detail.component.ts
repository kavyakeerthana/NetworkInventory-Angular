import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AssetService } from '../asset.service';
import { Asset } from '../admin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-asset-detail',
  templateUrl: './update-asset-detail.component.html',
  styleUrls: ['./update-asset-detail.component.css']
})
export class UpdateAssetDetailComponent {

id:any;
asset1:Asset=new Asset("","","","");
  constructor(private route:ActivatedRoute,private assetService:AssetService,private customerService:AdminService,private router:Router,private toastr: ToastrService){

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.asset1=new Asset("","","","");
    this.assetService.goToAssetPage(this.id).subscribe(data=>{
      this.asset1=data;
    })
  }

  assetquantity:any;
  asset2:Asset=new Asset("","","","");
  current:number | undefined;
  v:number|undefined;
  UpdateAsset(quantity:any){

    let v = +quantity; 
    this.current=+this.asset1.assetquantity+v;
    this.asset2=new Asset(this.asset1.assetId,this.asset1.assetname,this.asset1.assetmodel,this.current);
    
    this.assetService.UpdateAssetQuantity(this.asset1.assetmodelId,this.asset2).subscribe(data=>{
      console.log(data);
      this.toastr.show("Updated Quantity Successfully")
      setTimeout(()=>{this.router.navigate(['/updateasset']);},1500);
      
      // alert("Updated Quantity Successfully");

      
      });
  }


  

}
