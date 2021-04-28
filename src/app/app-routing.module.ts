import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistatarjetaComponent} from "../app/components/vistatarjeta/vistatarjeta.component";
import {AdicionarComponent} from "../app/components/adicionar/adicionar.component";
import {ListausuariosComponent} from "../app/components/listausuarios/listausuarios.component";
const routes: Routes = [
   {path:"vistatarjeta", component:VistatarjetaComponent},
   {path: "", component:AdicionarComponent},
   {path: "adicionar", component:AdicionarComponent},
   {path: "listausuarios", component:ListausuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
