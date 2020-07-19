import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
