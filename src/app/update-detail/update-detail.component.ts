import { Component } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent {

  id:any;
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  
  constructor(private route:ActivatedRoute,private customerService:AdminService,private router:Router,private toastr: ToastrService){

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.admin1=new Admin("","","","","","","","","","","","","","","");
    this.customerService.goToCustomerPage(this.id).subscribe(data=>{
      this.admin1=data;
    })
  }

  onSubmit(){
    this.customerService.updateEmployee(this.id,this.admin1).subscribe(data=>{
    console.log(data);
    this.toastr.show("Profile Updated")
    setTimeout(()=>{this.router.navigate(['/viewdetail',this.id]);},1500);
    // alert("Updated Successfully");
    // this.goToCustomerPage(this.id);
    });
  }
  
  customerDetail(id:any){

    this.router.navigate(['/viewdetail',id]);
  }
  

}
