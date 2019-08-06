import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';

// Services
import { EmpleadoService } from './services/empleado.service';

// Components
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListComponent } from './components/empleados/list/list.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
