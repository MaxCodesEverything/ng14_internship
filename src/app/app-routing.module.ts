import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
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
  },
  { 
    path: 'calendar', 
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule) 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
