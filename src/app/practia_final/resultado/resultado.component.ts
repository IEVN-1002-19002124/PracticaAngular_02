import { Component, OnInit} from '@angular/core';
import { DatosExamenService } from 'src/app/services/datos-examen.service';
import * as moment from 'moment';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  informacionUsuario: any;
  puntajeExamen: number = 0;
  edad: number = 0;
  signoZodiacal: string = '';

  constructor(private datosExamenService: DatosExamenService) {}

  ngOnInit() {
    this.informacionUsuario = this.datosExamenService.informacionUsuario;
    this.puntajeExamen = this.datosExamenService.puntajeExamen;
    this.edad = this.calcularEdad(this.informacionUsuario.fecha);
    this.signoZodiacal = this.obtenerSignoZodiacal(this.informacionUsuario.fecha);
  }

  calcularEdad(fechaNacimiento: string): number {
    const hoy = moment();
    const fechaNac = moment(fechaNacimiento, 'YYYY/MM/DD');
    return hoy.diff(fechaNac, 'years');
  }

  obtenerSignoZodiacal(fechaNacimiento: string): string {
    const fechaNac = moment(fechaNacimiento, 'YYYY/MM/DD');
    const mesDiaNac = fechaNac.format('MMDD');

    const signosZodiacales = [
      { signo: 'Aries', inicio: '0321', fin: '0419' },
      { signo: 'Acuario', inicio: '0120', fin: '0218' },
      { signo: 'Piscis', inicio: '0219', fin: '0320' },
      { signo: 'Tauro', inicio: '0420', fin: '0520' },
      { signo: 'Géminis', inicio: '0521', fin: '0620' },
      { signo: 'Cáncer', inicio: '0621', fin: '0722' },
      { signo: 'Leo', inicio: '0723', fin: '0822' },
      { signo: 'Virgo', inicio: '0823', fin: '0922' },
      { signo: 'Libra', inicio: '0923', fin: '1022' },
      { signo: 'Escorpio', inicio: '1023', fin: '1121' },
      { signo: 'Sagitario', inicio: '1122', fin: '1221' },
      { signo: 'Capricornio', inicio: '1222', fin: '0119' },
      
    ];


    for (const signo of signosZodiacales) {
      if (mesDiaNac >= signo.inicio && mesDiaNac <= signo.fin) {
        return signo.signo;
      }
    }

    return 'Desconocido';
  }
}