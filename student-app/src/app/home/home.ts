import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student-service';
import { Student } from '../models/Student';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
students:Student[]=[];
constructor(private studentService:StudentService){}
ngOnInit()
{
this.students = this.studentService.getStudents();
}
}