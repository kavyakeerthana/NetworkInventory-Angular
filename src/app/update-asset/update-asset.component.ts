import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset, Login } from '../admin';
import { AdminService } from '../admin.service';
import { AssetService } from '../asset.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent {

  asset1 : Asset[] | undefined;
 
  id:any;
  admin1:Login=new Login("","","","");

  constructor(private route:ActivatedRoute,private adminService:AdminService,private assetService : AssetService,private router:Router,private toastr: ToastrService){}
  ngOnInit():void{
    // this.id=this.route.snapshot.params['id'];
    // this.admin1=new Login("","","","");
    // this.adminService.goToAdminPage(this.id).subscribe(data=>{
    //   this.admin1=data;
    //   console.log(this.admin1.id);
    // })
    this.getAsset();
  }
  private getAsset(){
    this.assetService.getAssetList().subscribe(data=>{
     this.asset1=data;
     console.log(data);
    });
  }

  // onSubmit(){
  //   this.customerService.updateEmployee(this.id,this.admin1).subscribe(data=>{
  //   console.log(data);
  //   alert("Updated Successfully");
  //   // this.goToCustomerPage(this.id);
  //   });

  // (click)="deleteAsset(asset.assetmodelId,asset)"

  assetquantity:any;
  asset2:Asset=new Asset("","","","");
  UpdateAsset(id:any,quantity:any,asset:Asset){
    this.asset2=new Asset(asset.assetId,asset.assetname,asset.assetmodel,quantity);
    
    this.assetService.UpdateAssetQuantity(id,this.asset2).subscribe(data=>{
      console.log(data);
      alert("Updated Quantity Successfully");
      
      });
  }


  searchText:any;

  Routeto(id:any){
     this.router.navigate(['/updateassetdetail',id]);
  }

  deleteAsset(id:any){
    this.assetService.deleteAssetId(id).subscribe(data=>{
      console.log(data);

    }) 
    this.toastr.show("Asset Deleted");
    setTimeout(()=>{window.location.reload();},1500);

  }   
  



}
