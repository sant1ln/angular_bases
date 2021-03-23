import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  
  personajes:Personaje[] = [
    {
      nombre:'Aang',
      poder: 50
    }
  ]			

  nuevo: Personaje = {
    nombre: '',
    poder: null,
  }
    
  agregar(){
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: null
    }
  }

  eliminar(nombre:string){
    this.personajes = this.personajes.filter(personaje => personaje.nombre !== nombre)
  }

}
  