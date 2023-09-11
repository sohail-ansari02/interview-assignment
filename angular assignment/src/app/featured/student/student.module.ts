import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { StudentListComponent } from './pages/student-list/student-list.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
