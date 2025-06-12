import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { SidebarComponent } from './components/sidebar/sidebar.component';
;

const routes: Routes = [
  {
    path: '', 
    component: SidebarComponent
  },
  {
    path: 'examples',
    loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule)
  },
  { 
    path: 'js', 
    loadChildren: () => import('./modules/js/js.module').then(m => m.JsModule) 
  },
  { 
    path: 'etude', 
    loadChildren: () => import('./modules/etude/etude.module').then(m => m.EtudeModule) 
  },
  { 
    path: 'ts', 
    loadChildren: () => import('./modules/ts/ts.module').then(m => m.TsModule) 
  },
  { 
    path: 'styles', 
    loadChildren: () => import('./modules/styles/styles.module').then(m => m.StylesModule) 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
