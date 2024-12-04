import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  id: any;
  constructor(private fb: FormBuilder, private router: Router, private service: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.fetchData();
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    })
  }
  fetchData() {
    this.service.getById(this.id).subscribe({
      next: (response) => {
        this.updateForm.patchValue(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  onSubmit() {
    if (this.updateForm.valid) {
      this.service.updateData(this.id, this.updateForm.value).subscribe({
        next: (response) => {
          console.log(response);
          alert("Updated Sucessfully");
          this.router.navigate(['list']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
  backToList() {
    this.router.navigate(['list']);
  }
}
