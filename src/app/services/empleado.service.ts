import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listaEmpleados: AngularFireList<any>;
  empleadoSeleccionado: Empleado = new Empleado();

  constructor(private firebase: AngularFireDatabase) { }

  // Obtener todos los empleados de la tabla
  listarEmpleados() {
    this.listaEmpleados = this.firebase.list('empleados');
    return this.listaEmpleados;
  }

  // Crear un nuevo empleado
  crearEmpleado(empleado: Empleado) {
    this.listaEmpleados.push({
      nombre: empleado.nombre,
      apellidos: empleado.apellidos,
      cargo: empleado.cargo,
      salario: empleado.salario
    });
  }

  // Actualizar un empleado
  actualizarEmpleado(empleado: Empleado) {
    this.listaEmpleados.update(empleado.$key, {
      nombre: empleado.nombre,
      apellidos: empleado.apellidos,
      cargo: empleado.cargo,
      salario: empleado.salario
    });
  }

  // Eliminar un empleado
  eliminarEmpleado($key: string) {
    this.listaEmpleados.remove($key);
  }
}
