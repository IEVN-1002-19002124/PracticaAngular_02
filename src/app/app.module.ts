import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './Temperatura/temperatura/temperatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material/material.module';

import { MultiplicacionComponent } from './multiplicacion/multiplicacion/multiplicacion.component';
import { BoletosComponent } from './Cinepolis/boletos/boletos.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormDatosComponent } from './practia_final/form-datos/form-datos.component';
import { ExamenComponent } from './practia_final/examen/examen.component';
import { ResultadoComponent } from './practia_final/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent,
    BoletosComponent,
    MenuComponent,
    HomeComponent,
    FormDatosComponent,
    ExamenComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
