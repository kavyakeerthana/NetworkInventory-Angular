import { Component } from '@angular/core';
import { Login } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  
  users: Login = new Login("","","","");
  otp: any;
  otpcheck: any;
  users1: Login = new Login("","","","");
  check: any;
  a: boolean= true;
  b:boolean=false;
  c:boolean=false;

  constructor(private adminService: AdminService, private router: Router){}

  login(){
    this.adminService.forgot(this.users).subscribe(data => {
      if(data!="Enter valid number"){
        console.log(data);
        this.otp=data;
        alert("OTP generated");
        this.a=!this.a;
        this.b=!this.b;
      }
      else{
        alert("Invalid phone number");
      }
    })
  }

  login1(){
    if(this.otp == this.otpcheck){
      alert("OTP verified");
      this.b=!this.b;
      this.c=!this.c;
    }
    else{
      alert("OTP Incorrect");
    }
  }

  login2(){
    if(this.check == this.users1.password){
      this.users1.phone=this.users.phone;
      this.adminService.change(this.users1).subscribe(data => {
        console.log(data);
        alert("Password Updated Successfully");
        this.router.navigate(['/login']);
      })
    }else{
      alert("Confirm Password Incorrect");
    }
  }




}
