import { Component } from '@angular/core';
import { Admin, Login } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})



export class CustomerListComponent {

  admin1 : Admin[] | undefined;
  id:any;
  admin2:Login=new Login("","","","");

  searchText:any;
  constructor(private route:ActivatedRoute,private adminService : AdminService,private router:Router){}
  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.admin2=new Login("","","","");
    this.adminService.goToAdminPage(this.id).subscribe(data=>{
      this.admin2=data;
      console.log(this.admin2.id);
    })
    this.getCustomer();
  }
  private getCustomer(){
    this.adminService.getCustomerList().subscribe(data=>{
     this.admin1=data;
     console.log(data);
    });
  }

  customerDetails(id:any){

    console.log(this.adminService.getAdminId());
    this.router.navigate(['/cust',id]);
  }

}
