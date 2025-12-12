import { Injectable } from '@angular/core';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    {
      name: 'aishwarya',
      className: 'Class 10',
      gender: 'Female',
      hobby: 'sleeping',
      favouriteSubject: 'Maths'
    },
    {
      name: 'sharan',
      className: 'Class 10',
      gender: 'Male',
      hobby: 'sleeping',
      favouriteSubject: 'Social'
    }
  ]; 
  getStudents():Student[]
  {
    return this.students;
  }
  addStudent(student:Student)
  {
    this.students.push(student);
  }
}