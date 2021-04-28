import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuarios.model';
import { ListaUsuarios } from '../../interfaces/usuarios.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  public formulario:FormGroup;
  public user: Usuario;
  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      pais: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }

  GuardarEnLista(): void {
    this.user.nombre = this.formulario.get("nombre").value;
    ListaUsuarios.push()
  }
}
