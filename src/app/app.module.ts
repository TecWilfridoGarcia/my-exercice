
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ContentsComponent } from './components/contents/contents.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { EventComponent } from './components/event/event.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { FormstudentComponent } from './formstudent/formstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablestudentComponent } from './tablestudent/tablestudent.component';
@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    ContentsComponent,
    EnrollmentComponent,
    HomeComponent,
    StudentComponent,
    EventComponent,
    TeacherComponent,
    FormstudentComponent,
    TablestudentComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
