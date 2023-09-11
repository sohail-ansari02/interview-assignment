import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';

const routes: Routes = [
  { path: '', component: StudentComponent, redirectTo: 'list' },
  {
    path: 'list',
    component: StudentListComponent,
  },
  {
    path: 'form',
    component: StudentFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
