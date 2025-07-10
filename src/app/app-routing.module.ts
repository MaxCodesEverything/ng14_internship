import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
;

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'examples',
    loadComponent: () => import('./components/examples/examples.component').then(c => c.ExamplesComponent)
  },
  { 
    path: 'js', 
    loadComponent: () => import('./components/js/js.component').then(c => c.JsComponent)
  },
  { 
    path: 'practice', 
    loadComponent: () => import('./components/practice/practice.component').then(c => c.PracticeComponent) 
  },
  { 
    path: 'ts', 
    loadComponent: () => import('./components/ts/ts.component').then(c => c.TsComponent)
  },
  { 
    path: 'styles', 
    loadComponent: () => import('./components/styles/styles.component').then(c => c.StylesComponent)
  },
  {
    path: 'components',
    loadComponent: () => import('./components/components-component/components.component').then(c => c.ComponentsComponent) 
  },
  { 
    path: 'components/calendar', 
    loadComponent: () => import('./components/calendar/calendar.component').then(c => c.CalendarComponent) 
  },
  {
    path: 'components/carousel',
    loadComponent: () => import('./components/carousel/carousel.component').then(c => c.CarouselComponent)
  },
  { 
    path: 'test', // Component just for testing features
    loadComponent: () => import('./components/test/test.component').then(c => c.TestComponent)
  },
  { 
    path: 'task', 
    loadComponent: () => import('./components/task/task.component').then(c => c.TaskComponent)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
