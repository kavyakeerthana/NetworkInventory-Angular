import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddToCart, Admin, Asset } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {


  Items:Asset[]=[];
  cartItems:AddToCart[]=[];

  private baseurl="http://localhost:9093/AddAsset";
  constructor(private httpClient: HttpClient) { 
     
  }
  createAsset(asset1:Asset):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`,asset1);
  }
  getAssetList():Observable<Asset[]>{
    return this.httpClient.get<Asset[]>(`${this.baseurl}`);
  }

  UpdateAssetQuantity(id:any,asset:Asset):Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/${id}`,asset);
  }

  goToAssetPage(id:any):Observable<Asset>{
    return this.httpClient.get<Asset>(`${this.baseurl}/${id}`);
  }

  // getAssetByname(assetname:any):Observable<Asset>{
  //   return this.httpClient.get<Asset>(`${this.baseurl}/${assetname}`);
  // }
  getAssetByname(assetname:any):Observable<Asset[]>{
    return this.httpClient.get<Asset[]>(`${this.baseurl}`);
  }

  addToCart(product:Asset ) {
    this.Items.push(product);
  }

  getItems() {
    return this.Items;
  }

  deleteAssetId(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  



  
}
