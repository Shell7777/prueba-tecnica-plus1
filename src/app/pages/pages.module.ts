import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from '../app-routing.module';


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
    NgxCaptchaModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    TecnologiesComponent,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
