import { Component } from '@angular/core';
import { Login } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

signup:Login=new Login("","","","");
constructor(private employeeService: AdminService,private router:Router,private toastr: ToastrService){

}

ngOnInit():void
{

}

saveAdmin(){

  
  this.employeeService.createAdmin(this.signup).subscribe(data=>{
  console.log(data);
  this.toastr.show("Registration Successful");
    
  // alert("Registration Successful");
  this.AdminSignup();
  });
}

onSubmit(){
  console.log(this.signup);
  this.saveAdmin();
}

AdminSignup(){

  setTimeout(()=>{this.router.navigate(['/login']);},1500);
  // this.router.navigate(['/login']);
}

}
