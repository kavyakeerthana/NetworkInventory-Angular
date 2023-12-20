import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddToCart, Admin, Login, Login1 } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  private baseurl="http://localhost:9093/AddCustomer";
  private baseurl1="http://localhost:9093/signup";
  private baseurl2="http://localhost:9093/login";
  private baseurl3="http://localhost:9093/cart";
  private baseurl4="http://localhost:9093/log";
  private baseurl5="http://localhost:9093/forgot";
  private baseurl6="http://localhost:9093/change";

  private AdminId:any;

  constructor(private httpClient: HttpClient) { 
     
  }

  setAdminId(AdminId:any){
      this.AdminId=AdminId;
  }
  getAdminId(){
    return this.AdminId;
  }

  

  

  createCustomer(admin1:Admin):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`,admin1);
  }
  
  getCustomerList():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseurl}`);
  }
  goToCustomerPage(id:number):Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseurl}/${id}`);
  }
  updateEmployee(id:any,admin1:Admin):Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/${id}`,admin1);
  }
  createAdmin(login:Login):Observable<Object>{
    return this.httpClient.post(`${this.baseurl1}`,login);
  }
  
  login(adminlogin:Login1):Observable<object>{
    return this.httpClient.post(`${this.baseurl2}`,adminlogin);
  }
  
  AssignAsset(cart:AddToCart):Observable<object>{
    return this.httpClient.post(`${this.baseurl3}`,cart);
  }

  getCartList():Observable<AddToCart[]>{
    return this.httpClient.get<AddToCart[]>(`${this.baseurl3}`);
  }
  deleteAsset(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.baseurl3}/${id}`);
  }
  getAdminDetails(email:any):Observable<Login>{
    return this.httpClient.get<Login>(`${this.baseurl2}/${email}`);
  }
  goToAdminPage(id:any):Observable<Login>{
    return this.httpClient.get<Login>(`${this.baseurl4}/${id}`);
  }
  forgot(users:Login):Observable<Object>{
    return this.httpClient.post(`${this.baseurl5}`,users);
  }
  change(users: Login):Observable<Object>{
    return this.httpClient.put(`${this.baseurl6}`,users);
  }
  
}
