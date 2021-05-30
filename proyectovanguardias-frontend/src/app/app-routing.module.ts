import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatiendaComponent } from './components/listatienda/listatienda.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';

const routes: Routes = [
  {
    path: 'listar-ingredientes',
    component: ListatiendaComponent
  },
  {
    path: 'recetas',
    component: RecetasComponent
  },
  {
    path: 'recordatorios',
    component: RecordatorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
