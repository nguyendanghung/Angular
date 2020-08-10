import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesService {

  mes: string[] = []

  constructor() { }

  addMess(mes: string) {
    this.mes.push(mes)
  }
  clearMess() {
    this.mes = []
  }
}
