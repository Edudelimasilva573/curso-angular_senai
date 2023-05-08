import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';


const routes: Routes = [
  {
    path: '',
    component: JogosComponent,
  },
{
  path: '/jogos',
  component: JogosComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
