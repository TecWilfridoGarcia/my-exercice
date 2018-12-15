import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { EventComponent } from './components/event/event.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  { path: 'enrollments', component: EnrollmentComponent },
  { path: ' ', component: HomeComponent },
  { path: 'students', component: StudentComponent },
  { path: 'events', component: EventComponent },
  { path: 'teachers', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
