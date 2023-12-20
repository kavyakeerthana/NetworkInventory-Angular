import { Component } from '@angular/core';
import { Login } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  id:any;
  admin1:Login=new Login("","","","");
  idvalue:Login=new Login("","","","");
  constructor(private route:ActivatedRoute,private adminService:AdminService,private router:Router){

  }
  ngOnInit():void{
    // this.id=this.route.snapshot.params['id'];
    // this.admin1=new Login("","","","");
    // this.adminService.goToAdminPage(this.id).subscribe(data=>{
    //   this.admin1=data;
    //   // console.log(this.admin1.id);
    //   console.log(this.adminService.getAdminId());
 
    // })

     console.log(this.adminService.getAdminId());
  }

  AdminDetail(id:any){

    // console.log(this.adminService.getAdminId());
    this.router.navigate(['/adminprofile']);
  }

  



}
