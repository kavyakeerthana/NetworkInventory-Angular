import { Component } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent {

  id:any;
  admin1:Admin=new Admin("","","","","","","","","","","","","","","");
  
  constructor(private route:ActivatedRoute,private customerService:AdminService,private router:Router){

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.admin1=new Admin("","","","","","","","","","","","","","","");
    this.customerService.goToCustomerPage(this.id).subscribe(data=>{
      this.admin1=data;
    })
  }

  customerDetail(id:any){

    this.router.navigate(['/viewdetail',id]);
  }

}
