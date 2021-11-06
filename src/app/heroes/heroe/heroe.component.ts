import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad  : number =  45;

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }

    cambiarEdad(){
        this.edad = 30;
    }
}