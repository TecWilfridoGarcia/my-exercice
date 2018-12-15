import { Component, OnInit, NgModule } from '@angular/core';
import { TablestudentComponent } from 'src/app/tablestudent/tablestudent.component';
@NgModule({
  imports:[
    TablestudentComponent
  ]
})
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
