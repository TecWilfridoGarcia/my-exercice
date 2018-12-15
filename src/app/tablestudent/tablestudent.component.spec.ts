import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { TablestudentComponent } from './tablestudent.component';

describe('TablestudentComponent', () => {
  let component: TablestudentComponent;
  let fixture: ComponentFixture<TablestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablestudentComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
