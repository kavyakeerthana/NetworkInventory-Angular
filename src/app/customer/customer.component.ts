import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  id:any;
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  
  constructor(private route:ActivatedRoute,private adminService:AdminService,private router:Router){

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.admin1=new Admin("","","","","","","","","","","","","","","");
    this.adminService.goToCustomerPage(this.id).subscribe(data=>{
      this.admin1=data;
      console.log(this.adminService.getAdminId());
    })
    
  }


  customerDetail(id:any){

    this.router.navigate(['/viewdetail',id]);
  }

  GoBack(){
    // console.log(this.adminService.getAdminId());
    this.router.navigate(['/dash']);
  }
  


}
