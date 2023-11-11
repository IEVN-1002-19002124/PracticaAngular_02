import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosExamenService } from 'src/app/services/datos-examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  preguntas = [
    {
      enunciado: '¿Cuál es la función principal de if en Python?',
      opciones: ['Tomar decisiones', 'Definir funciones', 'Crear bucles', 'Importar módulos'],
    },
    {
      enunciado: '¿Qué tipo de lenguaje es Python?',
      opciones: ['Compilado', 'Interpretado', 'Híbrido', 'Orientado a objetos'],
    },
    {
      enunciado: '¿Cómo se define una función en Python?',
      opciones: ['function nombre_funcion()', 'def nombre_funcion():', 'function nombre_funcion:', 'define nombre_funcion():'],
    },
    {
      enunciado: '¿Cuál es el resultado de 3 + 5 en Python?',
      opciones: ['8', '35', '15', '53'],
    },
    {
      enunciado: '¿Qué palabra clave se usa para definir una clase en Python?',
      opciones: ['class', 'define', 'type', 'struct'],
    },
  ];

  respuestas: string[] = [];
  examenCalificado = false;
  puntaje = 0;

  constructor(private datosExamenService: DatosExamenService, private router: Router) {}

  calificarExamen() {
    this.puntaje = 0;

    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.respuestas[i] === this.preguntas[i].opciones[0]) {
        this.puntaje++;
      }
    }

    this.examenCalificado = true;

    // Guardar datos en el servicio
    this.datosExamenService.respuestasExamen = this.respuestas;
    this.datosExamenService.puntajeExamen = this.puntaje;

    this.router.navigate(['/resultado']);
  }
  
}
