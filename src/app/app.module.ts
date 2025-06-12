import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { JsComponent } from './components/js/js.component';
import { TsComponent } from './components/ts/ts.component';
import { StylesComponent } from './components/styles/styles.component';
import { EtudeComponent } from './components/etude/etude.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ExamplesComponent,
    JsComponent,
    TsComponent,
    StylesComponent,
    EtudeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
