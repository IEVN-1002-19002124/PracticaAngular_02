import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {
  num1 = 0;
  num2 = 0;
  res = 0;
  suma:string='';
  mostrarResultado(){
    for(var i = 0; i<this.num1; i++){
      this.res+=this.num2;
      if(i != this.num1-1) {this.suma +=this.num2+'+'}
      else {this.suma += ''+this.num2}
    }
    this.suma+= '=' + this.res;
  }
}
