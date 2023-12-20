import { Component } from '@angular/core';
import { Admin, Login } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  id:any;
  admin2:Login=new Login("","","","");
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  constructor(private route:ActivatedRoute,private adminService: AdminService,private router:Router,private toastr: ToastrService){

  }

  ngOnInit():void{
    // this.id=this.route.snapshot.params['id'];
    // this.admin2=new Login("","","","");
    // this.adminService.goToAdminPage(this.id).subscribe(data=>{
    //   this.admin2=data;
    //   console.log(this.admin2.id);
    // })
    
  }

saveCustomer(){
  this.adminService.createCustomer(this.admin1).subscribe(data=>{
  console.log(data);
  this.toastr.show("Profile Created")
  setTimeout(()=>{this.router.navigate(['/dash']);},1500);
  });
}

onSubmit(){
  console.log(this.admin1);
  this.saveCustomer();
}



}
