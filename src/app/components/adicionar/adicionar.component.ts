import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  formulario:FormGroup;


  constructor(public fb:FormBuilder) { 
    
    this.formulario =fb.group({})
  }

  ngOnInit(): void {
  }

}
