import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { FormStudentComponent } from './student/form-student/form-student.component';

const routes: Routes = [
  {
    path: 'students',
    component: ListStudentComponent,
  },
  {
    path: 'add-student',
    component: FormStudentComponent,
  },
  {
    path: 'update-student/:id',
    component: FormStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
