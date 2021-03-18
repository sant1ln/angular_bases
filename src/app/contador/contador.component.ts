import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h2>{{ title }}</h2>
    <button (click)="operacion(+base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="operacion(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
 title = 'Contador APP';
  numero:number = 10;
  base: number = 5
  
  operacion(num:number):void{
    this.numero += num
  }

}
