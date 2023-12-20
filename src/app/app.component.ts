import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {MatSort} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetworkInventory';
}
