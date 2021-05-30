import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textoconvertido',
  templateUrl: './textoconvertido.component.html',
  styleUrls: ['./textoconvertido.component.css']
})
export class TextoconvertidoComponent implements OnInit {

  @Input() text !: string;
  constructor() { }
  texto: string ="";
  ngOnInit(): void {
  }

}
