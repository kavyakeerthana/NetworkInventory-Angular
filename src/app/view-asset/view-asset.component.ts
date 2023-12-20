import { Component } from '@angular/core';
import { Asset, Login } from '../admin';
import { AssetService } from '../asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent {

  searchText:any;
  asset1 : Asset[] | undefined;
 
  id:any;
  admin1:Login=new Login("","","","");

  constructor(private route:ActivatedRoute,private adminService:AdminService,private assetService : AssetService,private router:Router){}
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

}
