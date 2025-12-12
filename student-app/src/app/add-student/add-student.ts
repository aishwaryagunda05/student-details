import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student-service';
import { Student } from '../models/Student';
@Component({
  selector: 'app-add-student',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudentComponent {
 studentForm: any;  
  constructor(
    private fb:FormBuilder,
    private studentService:StudentService,
    private router:Router
  ){}
  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      className: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favouriteSubject: ['']
    });
  }
  get f()
  {
    return this.studentForm.controls;
  }
  save()
  {
    if(this.studentForm.invalid)
    {
      this.studentForm.markAllAsTouched();
      return;
    }
    const student:Student={
      name: this.f['name'].value!,
      className: this.f['className'].value!,
      gender: this.f['gender'].value!,
      hobby: this.f['hasHobby'].value ? this.f['hobby'].value! : 'No hobby',
      favouriteSubject: this.f['favouriteSubject'].value || ''
    };
      this.studentService.addStudent(student);
    this.router.navigate(['/']); 
  }
}