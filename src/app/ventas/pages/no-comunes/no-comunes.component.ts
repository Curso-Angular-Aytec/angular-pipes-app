import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})

export class NoComunesComponent {
  nombre: string = 'Susana';
  genero: string = 'femenino';
  clientes: string[] = ['Pedro', 'Juan', 'Edu', 'Nico'];

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  clientesMapa = {
    '=0': 'no tenermos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  persona = {
    nombre: 'Carlos',
    edad: '22',
    direccion: 'Ciudad Real, España'
  }

  heroes = [{
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
  ]

  cambiarCliente() {
    this.nombre = 'Carlos';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }
}