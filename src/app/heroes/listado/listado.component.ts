import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent{
    heroes: string[] = ['Spiderman','Iron man','Hulk','Thor','Capitán América']
    heroeBorrado: string = '';

    borrandoHeroe(){
        //this.heroes = [];  //borrar todo el listado
        
        this.heroeBorrado = this.heroes.shift() || '';  //Borra el primer elemento del arreglo y lo retorna
    }
}
