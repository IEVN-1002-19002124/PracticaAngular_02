import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  num='';
  a:string='--';
  b:string='--';
  res:number=0;
  resultado:number=0;
  check(operador:string):number{
    switch(operador){
      case 'c':
        this.a='Celsius';
        this.b='Fahrenheit';
        this.res=((parseInt(this.num)*(9/5))+32);
        break;
      case 'f':
        this.a='Fahrenheit';
        this.b='Celsius';
        this.res=((parseInt(this.num)-32)*(5/9));
        break;
    }
    return this.res;
  }
  mostrarResultador(){
    this.resultado=this.res;
  }
}
