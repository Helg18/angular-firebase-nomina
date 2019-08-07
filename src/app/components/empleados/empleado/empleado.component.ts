import { Component, OnInit } from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {EmpleadoService} from '../../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.listarEmpleados();
  }

  onSubmit(empleado: Empleado) {
    if (empleado.$key === undefined) {
      this.empleadoService.crearEmpleado(empleado);
    } else {
      this.empleadoService.actualizarEmpleado(empleado);
    }
    this.empleadoService.empleadoSeleccionado = new Empleado();
  }

}
