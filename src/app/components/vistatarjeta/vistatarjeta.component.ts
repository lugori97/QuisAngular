import { Component, OnInit } from '@angular/core';
import {Usuario,ListaUsuarios} from "../../interfaces/usuario"
@Component({
  selector: 'app-vistatarjeta',
  templateUrl: './vistatarjeta.component.html',
  styleUrls: ['./vistatarjeta.component.scss']
})
export class VistatarjetaComponent implements OnInit {
  Lista:Array<Usuario>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
