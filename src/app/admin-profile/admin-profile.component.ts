import { Component } from '@angular/core';
import { Login } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  id:any;
  admin1:Login=new Login("","","","");
  data3:any;
  constructor(private route:ActivatedRoute,private adminService:AdminService,private router:Router){

  }
  ngOnInit():void{
    // this.id=this.route.snapshot.params['id'];
    // this.admin1=new Login("","","","");
    // this.adminService.goToAdminPage(this.id).subscribe(data=>{
    //   this.admin1=data;
    //   console.log(this.admin1.id);
    //   console.log("getter",this.adminService.getAdminId());
    // })

   
    

    // localStorage.setItem('key1', this.admin1.id);
    // this.data3 = localStorage.getItem('key1');
    // console.log(this.data3);


    

    console.log("getter",this.adminService.getAdminId());
    

    this.adminService.goToAdminPage(this.adminService.getAdminId()).subscribe(data=>{
      this.admin1=data;
    })
    
  }

}
