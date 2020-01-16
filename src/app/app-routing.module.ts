import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloginComponent } from './pages/plogin/plogin.component';
import { PrecuperapassComponent } from './pages/precuperapass/precuperapass.component';
import { PinicioComponent } from './pages/pinicio/pinicio.component';
import { PlistComponent } from './pages/pacientes/plist/plist.component';
import { FormAddComponent } from './pages/pacientes/form-add/form-add.component';
import { ListaComponent } from './pages/doctores/lista/lista.component';
import { FormmedicosComponent } from './pages/doctores/formmedicos/formmedicos.component';
import { PdataComponent } from './pages/pacientes/pdata/pdata.component';


const routes: Routes = [
  { path: 'login', component: PloginComponent },
  { path: '', component: PloginComponent },

  { path: 'recuperapass', component: PrecuperapassComponent },
  { path: 'welcome', component: PinicioComponent },
  { path: 'listpacientes', component: PlistComponent },
  { path: 'addpaciente', component: FormAddComponent },
  { path: 'listdoctors', component: ListaComponent },
  { path: 'adddoctor', component: FormmedicosComponent },
  { path: 'resumenpaciente/:idpaciente', component: PdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
