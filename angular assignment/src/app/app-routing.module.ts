import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./featured/student/student.module').then((m) => m.StudentModule),
      data: {
        pageName: 'Student'
      }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
