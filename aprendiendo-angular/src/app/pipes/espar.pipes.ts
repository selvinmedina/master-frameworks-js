import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {

    transform(value: any) {
        let espar = 'No es un numero par';
        if(value %2 == 0){
            espar = 'Es un numero par';
        }
        return 'Estamos en ' + value + ' y ' + espar; 
    }
}