import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent{
    titulo: string = 'Aplicacion acumulador';
    numero: number = 10;
    base  : number = 5;

    acumular(valor:number){
    this.numero += valor;
    }
}