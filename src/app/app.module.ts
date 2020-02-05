import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Rutas } from './app.router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LugaresComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
