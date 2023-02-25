import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html'
})

export class NumerosComponent {
  ventasNetas: number = 123456789.98765;
  porcentaje: number = 0.48;
}