import { Component, OnInit } from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {EmpleadoService} from '../../../services/empleado.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.empleadoService.listarEmpleados();
  }

  onSubmit(empleado: Empleado) {
    if (empleado.$key === undefined) {
      this.empleadoService.crearEmpleado(empleado);
      this.toastrService.success('Creado un nuevo empleado');
    } else {
      this.empleadoService.actualizarEmpleado(empleado);
      this.toastrService.success('Actualizado el empleado');
    }
    this.empleadoService.empleadoSeleccionado = new Empleado();
  }

}
