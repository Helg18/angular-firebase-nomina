import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../services/empleado.service';
import {Empleado} from '../../../models/empleado';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  empleadoList: Empleado[];
  constructor(private empleadoService: EmpleadoService) { }

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

}
