import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';

const routes: Routes = [
  //TODO: MODIIGICA LAS RUTAS 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'tecnologies/:id',
    component:TecnologiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
