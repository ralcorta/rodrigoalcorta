import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaveComponent } from './cave.component';


const routes: Routes = [
  {
    path: '',
    component: CaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaveRoutingModule { }
