import { Component, OnInit } from "@angular/core";
import {Usuario,ListaUsuarios} from "../../interfaces/usuario"

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss']
})
export class ListausuariosComponent implements OnInit {

  Lista:Array<Usuario>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
   
  }

}
