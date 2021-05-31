;
import { TestingComponent } from './components/testing/testing.component';
import { MostrarlistaComponent } from './components/mostrarlista/mostrarlista.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListatiendaComponent } from './components/listatienda/listatienda.component';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { ComandodevozComponent } from './components/comandodevoz/comandodevoz.component';
import { TextoconvertidoComponent } from './components/textoconvertido/textoconvertido.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListatiendaComponent,
    RecordatorioComponent,
    RecetasComponent,
    ComandodevozComponent,
    TextoconvertidoComponent,
    MostrarlistaComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
