import { Component } from '@angular/core';
import { Asset, Login } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assetmodel',
  templateUrl: './assetmodel.component.html',
  styleUrls: ['./assetmodel.component.css']
})
export class AssetmodelComponent {

  asset1:Asset=new Asset("11","Modem (Parent:BroadBand Connection)","","");
  asset2:Asset=new Asset("22","Router (Parent:Modem)","","");
  asset3:Asset=new Asset("33","Wireless Access Point (Parent:Router)","","");
  asset4:Asset=new Asset("33","Ethernet Cable (Parent:Router)","","");
  asset5:Asset=new Asset("2","Dongle","","");
  asset6:Asset=new Asset("111","Optical Network Terminal (Parent:Broadband Connection)","","");
  asset7:Asset=new Asset("222","Splitters (Parent:Optical Network Terminal)","","");
  asset8:Asset=new Asset("333","Fiber Optic Cable (Parent:Splitter)","","");
  asset9:Asset=new Asset("44","Network Switch (Parent:Ethernet Cable)","","");
  
  
  id:any;
  admin1:Login=new Login("","","","");
  constructor(private route:ActivatedRoute,private adminService:AdminService,private assetService: AssetService,private router:Router,private toastr: ToastrService){

  }

  ngOnInit():void{
    // this.id=this.route.snapshot.params['id'];
    // this.admin1=new Login("","","","");
    // this.adminService.goToAdminPage(this.id).subscribe(data=>{
    //   this.admin1=data;
    //   console.log(this.admin1.id);
    // })

}

saveAsset(){
  if (this.asset1.assetmodel!=""){
    this.assetService.createAsset(this.asset1).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset2.assetmodel!=""){
    this.assetService.createAsset(this.asset2).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset3.assetmodel!=""){
    this.assetService.createAsset(this.asset3).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset4.assetmodel!=""){
    this.assetService.createAsset(this.asset4).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset5.assetmodel!=""){
    this.assetService.createAsset(this.asset5).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset6.assetmodel!=""){
    this.assetService.createAsset(this.asset6).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset7.assetmodel!=""){
    this.assetService.createAsset(this.asset7).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset8.assetmodel!=""){
    this.assetService.createAsset(this.asset8).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      // alert("Asset added successfully");
      console.log(data);
      });
  }
  if (this.asset9.assetmodel!=""){
    this.assetService.createAsset(this.asset9).subscribe(data=>{
      this.toastr.show("Asset added successfully")
      
      // alert("Asset added successfully");
      console.log(data);

      });
  }
  setTimeout(()=>{window.location.reload();},1500);
  // this.router.navigate(['/dash']);
  // window.location.reload();
}

onSubmit(){
  this.saveAsset();
}

}
