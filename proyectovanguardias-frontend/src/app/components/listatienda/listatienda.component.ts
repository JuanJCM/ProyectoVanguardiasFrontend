import { Component, OnInit } from '@angular/core';
import { ListaIngredientes } from '../shared/ListaIngredientes';
import { ListaMock } from '../shared/mocks/lista-mocks';

@Component({
  selector: 'app-listatienda',
  templateUrl: './listatienda.component.html',
  styleUrls: ['./listatienda.component.css']
})
export class ListatiendaComponent implements OnInit {
  listas!: ListaIngredientes[];
  selectedLista!: ListaIngredientes;
  constructor() { }

  ngOnInit(): void {
    this.listas = ListaMock;
  }

  crear_ListaIngredientes(){
      var num_lista = this.listas?.length+1;
      this.listas?.push({nombre: "Lista Ingredientes " + num_lista, listaItems: []});
  }

  onSelect(lista: ListaIngredientes){
    this.selectedLista = lista;
  }

}
