import { Component } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {

  // id:any;
  // admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  
  // constructor(private route:ActivatedRoute,private customerService:AdminService){

  // }
  // ngOnInit():void{
  //   this.id=this.route.snapshot.params['id'];
  //   this.admin1=new Admin("","","","","","","","","","","","","","","");
  //   this.customerService.goToCustomerPage(this.id).subscribe(data=>{
  //     this.admin1=data;
  //   })
  // }

}
