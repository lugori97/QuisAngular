import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from "../../interfaces/usuarios";
@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss']
})
export class ListausuariosComponent implements OnInit {

  Lista:Array<Usuarios>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
    
  }

}
