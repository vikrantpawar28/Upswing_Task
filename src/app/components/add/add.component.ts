import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addnewForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private service: ProductService) { }
  ngOnInit() {
    this.addnewForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.addnewForm.valid) {
      this.service.uploadData(this.addnewForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['list']);
          alert('New Data Created');
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
  backToList() {
    this.router.navigate(['list']);
  }
}
