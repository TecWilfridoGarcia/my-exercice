import { Component, NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
@NgModule({
  imports:[
    MaterialModule
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-exercise';
}
