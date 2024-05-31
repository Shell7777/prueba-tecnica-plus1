import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    TecnologiesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    TecnologiesComponent,]
})
export class PagesModule { }
