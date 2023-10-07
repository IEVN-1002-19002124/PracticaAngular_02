import { Component } from '@angular/core';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent {
  nombre:string = '';
  numPersonas:number = 0;
  cinesco:number = 0;
  numBoletos:number = 0;
  salida:string = '$0';
  precioBoletos:number = 12;
  calcularPrecios(){
    var a = this.numBoletos*this.precioBoletos;
    /* if(this.numBoletos <= 0 && this.numPersonas <= 0){
      return alert('No se puede ingresar esos valores');
    } */
    if(this.numBoletos/this.numPersonas > 7){
      alert("No puedes comprar más de 7 boletos por persona")
    }else{
      if(this.numBoletos>5){
        a = (a-(a*.15))
        this.salida = '$' + a;
      }
      if(this.numBoletos<=5 && this.numBoletos>=3){
        a = (a-(a*.10))
        this.salida = '$' + a;
      }else{
        this.salida = '$' + a;
      }
    }
    if(this.cinesco == 1){
      this.salida = '$' + (a-(a/10));
    }
  }
  refrescar(){
    window.location.reload();
  }
}
