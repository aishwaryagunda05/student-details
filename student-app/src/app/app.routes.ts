import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AddStudentComponent } from './add-student/add-student';

export const routes: Routes = [
  { path: '', component: HomeComponent },       
  { path: 'add-student', component: AddStudentComponent },  
  { path: '**', redirectTo: '' }                 
];