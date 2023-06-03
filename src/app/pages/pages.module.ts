import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EstadoComponent } from './estado/estado.component';
import { EstadoFormComponent } from './estado-form/estado-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstadoComponent,
    EstadoFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }
