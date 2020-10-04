import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module')
      .then(m => m.PortfolioModule),
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tool.module')
      .then(m => m.ToolModule),
  },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
