import { Component } from '@angular/core';
import { AssetService } from '../asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCart, Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.assetService.getItems();
  id:any;
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  admin2:Admin[] | undefined;
  cart1:AddToCart[]=[];
  currentcart1:AddToCart[]=[];

  constructor(private adminService : AdminService, private assetService : AssetService,private router:Router,private route:ActivatedRoute){}

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

}
