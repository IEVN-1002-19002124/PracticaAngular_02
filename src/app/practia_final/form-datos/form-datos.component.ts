import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DatosExamenService } from 'src/app/services/datos-examen.service';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})

export class FormDatosComponent {
  constructor(
    private router: Router,
    private datosExamenService: DatosExamenService
  ) { }

  nombre = '';
  apaterno = '';
  amaterno = '';
  fecha = '';
  sexo = '';

  enviarFormulario() {
    // Guardar información del usuario en el servicio
    this.datosExamenService.informacionUsuario = {
      nombre: this.nombre,
      apaterno: this.apaterno,
      amaterno: this.amaterno,
      fecha: this.fecha,
      sexo: this.sexo
    };

    console.log(this.fecha);
    
    this.router.navigate(['/examen']);
  }
}
