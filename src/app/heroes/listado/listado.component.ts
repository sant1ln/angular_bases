import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

    heroes: string[] = ['Spider','Iron','Someone else']
    heroeBorrado: string = '';

    borrarHeroe(nombre: string):void{
      this.heroes = this.heroes.filter(hero => hero !== nombre)
      this.heroeBorrado = nombre;
    }

}
