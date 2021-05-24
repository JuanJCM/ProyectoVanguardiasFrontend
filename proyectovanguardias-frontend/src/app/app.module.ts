import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListatiendaComponent } from './components/listatienda/listatienda/listatienda.component';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import { RecetasComponent } from './components/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListatiendaComponent,
    RecordatorioComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
