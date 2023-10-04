import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './Temperatura/temperatura/temperatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material/material.module';

import { MultiplicacionComponent } from './multiplicacion/multiplicacion/multiplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
