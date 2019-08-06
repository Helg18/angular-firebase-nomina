import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listaEmpleados: AngularFireList<Empleado>;

  constructor(private firebase: AngularFireDatabase) { }

}
