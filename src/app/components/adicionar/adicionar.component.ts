import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,} from '@angular/forms';
import {Usuario,ListaUsuarios} from "../../interfaces/usuario"
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

formulario:FormGroup;
nombre:any;
apellidos:any;
ciudad:any;
pais: any;
genero:any;
lista:Array<any> = ListaUsuarios;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      nombre:["",Validators.required],
      apellidos:["",Validators.required],
      ciudad:["",Validators.required],
      pais:["",Validators.required],
      //genero:["",Validators.required],
    });
    

  
  }

  ngOnInit(): void {
      this.nombre=this.formulario.get("nombre") as FormGroup;
      this.apellidos=this.formulario.get("apellidos") as FormGroup;
      this.ciudad=this.formulario.get("ciudad") as FormGroup;
      this.pais=this.formulario.get("pais") as FormGroup;
      //this.nombre=this.formulario.get("genero") as FormGroup;
  }
crear(){
  let user:Usuario = {nombre:this.nombre.value ,apellidos:this.apellidos.value,ciudad:this.ciudad.value,pais:this.pais.value,genero:"masculino"}
  ListaUsuarios.push(user);
  console.log(user.nombre,user.pais,user.apellidos,user.ciudad,user.genero);
}
 //// GuardarEnLista(): void {
//    if (this.formulario.get('nombre').value)
 //   this.user.nombre = this.formulario.get("nombre").value;
 //   ListaUsuarios.push()
 // }
}
