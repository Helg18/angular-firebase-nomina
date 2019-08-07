import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../services/empleado.service';
import {Empleado} from '../../../models/empleado';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  empleadoList: Empleado[];
  constructor(private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.empleadoService.listarEmpleados().snapshotChanges().subscribe(item => {
      this.empleadoList = [];
      item.forEach(value => {
        const e = value.payload.toJSON();
        e['$key'] = value.key;
        this.empleadoList.push(e as Empleado);
      });
    });
  }

  onEditar(empleado: Empleado) {
    this.empleadoService.empleadoSeleccionado = Object.assign({}, empleado);
  }

  onEliminar($key: string) {
    if (confirm('Esta accion no se puede deshacer, estas seguro que quieres eliminarlo?')) {
      this.empleadoService.eliminarEmpleado($key);
      this.empleadoService.empleadoSeleccionado = new Empleado();
      this.toastrService.success('Eliminado exitosamente', 'Eliminado');
      return true;
    }
    return null;
  }
}
