import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api='http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  uploadData(data:any):Observable<any>{
    return this.http.post(`${this.api}`,data);
  }
  getAllData():Observable<any>{
    return this.http.get(`${this.api}`);
  }
  getById(id:any):Observable<any>{
    return this.http.get(`${this.api}/${id}`);
  }
  updateData(id:any,data:any):Observable<any>{
    return this.http.put(`${this.api}/${id}`,data);
  }
  deleteById(id:any):Observable<any>{
    return this.http.delete(`${this.api}/${id}`);
  }
}
