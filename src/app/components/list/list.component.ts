import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataSource = new MatTableDataSource();

  constructor(private router:Router,private service:ProductService){}
  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.service.getAllData().subscribe({
      next:(response)=>{
        this.dataSource = new MatTableDataSource(response);
        console.log(response);
      }
    })
  }
  displayedColumns: string[] = ['position', 'name', 'price', 'category','Action'];
  openAddNew(){
    this.router.navigate(['add']);
  }
  openEdit(id:any){
    this.router.navigate(['update',id]);
  }
  delete(id:any){
    this.service.deleteById(id).subscribe({
      next:(response)=>{
        alert("Deleted Sucessfully");
        this.fetchData();
      }
    })
  }
}
