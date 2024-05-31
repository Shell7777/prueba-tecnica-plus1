import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    HomeComponent,
    TecnologiesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  exports:[
    HomeComponent,
    TecnologiesComponent,]
})
export class PagesModule { }
