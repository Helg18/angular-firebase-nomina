import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';

// Services
import { EmpleadoService } from './services/empleado.service';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
