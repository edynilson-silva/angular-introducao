import { Injectable } from '@angular/core';

@Injectable({
  // Informa para o angular que nosso serviço é para ir ao módulo raiz (app.module)
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos() {
    return [
      {nome: 'Maria Silva'},
      {nome: 'Marcos Souza'},
      {nome: 'Karina Lemes'}
    ];
  }
}
