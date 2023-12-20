import { Component } from '@angular/core';
import { AddToCart, Admin, Asset } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent {

  id:any;
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  cart1:AddToCart[]=[];
  currentcart1:AddToCart[]=[];
  
  constructor(private route:ActivatedRoute,private adminService:AdminService,private router:Router,private assetService:AssetService,private toastr: ToastrService){

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.admin1=new Admin("","","","","","","","","","","","","","","");
    this.adminService.goToCustomerPage(this.id).subscribe(data=>{
      this.admin1=data;
      
    })
    this.getcartList();
  }

  private getcartList(){
    this.adminService.getCartList().subscribe(data=>{
     this.cart1=data;
    //  console.log(data);
    
    console.log(this.admin1.id);
    this.getIdCart(this.admin1.id);
    
    console.log(this.currentcart1);
    });
    
  }

  order:AddToCart[]=[];
  private getIdCart(id:any){
    this.currentcart1 = this.cart1?.filter((element)=>{
      return element.customerId==id;
      
    });

    this.order= this.currentcart1.sort ((a,b) => { 
      return a.assetId - b.assetId;
     });
     console.log(this.order);
  }

  customerDetail(id:any){

    this.router.navigate(['/viewdetail',id]);
  }

updateQuantity:Asset=new Asset("","","","");
updateAsset:Asset= new Asset("","","","");
modelid:any;
quantity:any;

  deleteAsset(id:any,asset:AddToCart,modelid:any){
    this.modelid=modelid;
    this.adminService.deleteAsset(id).subscribe(data=>{
      console.log(data);
 
      this.toastr.show("Asset Deleted")
    //  window.location.reload()
    //  this.ngOnInit()
      // alert("Asset Deleted")
    })
    
      this.updateQuantity=new Asset(asset.assetId,asset.assetname,asset.assetmodel,asset.assetquantity);
      // this.updateQuantity.assetquantity=this.asset.assetquantity+1;
      
      this.quantity=this.updateQuantity.assetquantity;
      console.log(this.updateQuantity.assetquantity);
      console.log(this.quantity);

      
  

      this.updateAsset=new Asset(this.updateQuantity.assetId,this.updateQuantity.assetname,this.updateQuantity.assetmodel,this.quantity);
      
      // console.log(this.updateQuantity.assetmodelId);
      console.log(this.updateQuantity);
      this.assetService.UpdateAssetQuantity(this.modelid,this.updateAsset).subscribe(data=>{
        // alert("Quantity Deleted")
        console.log(data);
        });

        setTimeout(()=>{window.location.reload();},1500);
      }

    

  }
  
