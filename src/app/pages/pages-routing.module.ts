import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoComponent } from './estado/estado.component';
import { EstadoFormComponent } from './estado-form/estado-form.component';

const routes: Routes = [
  { path: '', component: EstadoComponent},
  { path: 'new', component: EstadoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
