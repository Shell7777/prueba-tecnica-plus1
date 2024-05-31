import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,   
    FormsModule,
    MatFormFieldModule,
    MatInputModule,   
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    
    ],
  exports: [ BrowserAnimationsModule,
    MatInputModule,   
    FormsModule,
    MatFormFieldModule,
    MatInputModule,   
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,],
})
export class MaterialModule {}
