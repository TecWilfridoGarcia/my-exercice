import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablestudentDataSource } from './tablestudent-datasource';

@Component({
  selector: 'app-tablestudent',
  templateUrl: './tablestudent.component.html',
  styleUrls: ['./tablestudent.component.scss']
})
export class TablestudentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablestudentDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TablestudentDataSource(this.paginator, this.sort);
  }
}
