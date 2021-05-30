import { Component, Input, OnInit } from '@angular/core';
import { ListaIngredientes } from '../shared/ListaIngredientes';

@Component({
  selector: 'app-mostrarlista',
  templateUrl: './mostrarlista.component.html',
  styleUrls: ['./mostrarlista.component.css']
})
export class MostrarlistaComponent implements OnInit {
  @Input() selectedLista !: ListaIngredientes;

  constructor() { }

  ngOnInit(): void {
  }

  agregar_Elemento(){

  }

}
