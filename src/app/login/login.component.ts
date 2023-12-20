import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Login, Login1 } from '../admin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  model:any={};
 
   getData:any;
 
   adminlogin:Login1=new Login1("","");
   admin1:Login=new Login("","","","");
   constructor(private adminService:AdminService, private router:Router,private toastr: ToastrService)
 
   {}
 
   ngOnInit():void
   {
   
   }

   private getAdmindetails(email:any){
    this.adminService.getAdminDetails(email).subscribe(data=>{
     this.admin1=data;
     console.log(data);
     this.Adminlogin();
     this.adminService.setAdminId(this.admin1.id);

     let data1 = {
      'token': 'token',
      'name': this.admin1.id,
      
    };
    localStorage.setItem('myLSkey', JSON.stringify(data1));
    
    
    });
    // console.log(this.admin1.id);
    // this.adminService.setAdminId(this.admin1.id);
    
  }

  flag:number=0;
   login(){
    console.log(this.adminlogin.email);
    console.log(this.adminlogin.password);
    if ( (this.adminlogin.email=="") || (this.adminlogin.password=="") ){
      this.toastr.show("Fields Empty");
    }
   else{
      this.adminService.login(this.adminlogin).subscribe((data)=>
     {
       this.getData=data;
       if(this.getData==1){
        this.toastr.show("Welcome Admin");
        this.getAdmindetails(this.adminlogin.email);
       }
       else{
        this.toastr.show("Invalid User");
        //  alert(""); 
       }
     })
    }
     
  }
  Adminlogin(){

    setTimeout(()=>{this.router.navigate(['/dash']);},1500);
    // this.router.navigate(['/dash']);
  }
 
  
 
 }
 
