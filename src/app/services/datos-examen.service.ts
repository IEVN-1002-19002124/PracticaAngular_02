import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosExamenService {
  informacionUsuario: any;
  respuestasExamen: string[] = []; // Inicializado como un array vacío
  puntajeExamen: number = 0;;
  constructor() { }
}
