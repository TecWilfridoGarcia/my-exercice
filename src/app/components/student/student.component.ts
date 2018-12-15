import { Component, OnInit, NgModule } from '@angular/core';
import { FormstudentComponent } from '../../formstudent/formstudent.component';
import { TablestudentComponent } from '../../tablestudent/tablestudent.component';
@NgModule({
  imports:[
    FormstudentComponent,
    TablestudentComponent
  ]
})
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
