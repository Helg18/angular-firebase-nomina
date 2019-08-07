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
    this.empleadoService.crearEmpleado(empleado);
    this.empleadoService.empleadoSeleccionado = new Empleado();
  }

}
