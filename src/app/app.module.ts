import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PloginComponent } from './pages/plogin/plogin.component';
import { CloginComponent } from './components/clogin/clogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materia.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CrecuperapassComponent } from './components/crecuperapass/crecuperapass.component';
import { PrecuperapassComponent } from './pages/precuperapass/precuperapass.component';
import { PinicioComponent } from './pages/pinicio/pinicio.component';
import { CbaseComponent } from './components/base/cbase/cbase.component';
import { CmenuComponent } from './components/base/cmenu/cmenu.component';
import { FormAddComponent } from './pages/pacientes/form-add/form-add.component';
import { PlistComponent } from './pages/pacientes/plist/plist.component';
import { ClistComponent } from './components/pacientes/clist/clist.component';
import { CformdataComponent } from './components/pacientes/cformdata/cformdata.component';
import { ListaComponent } from './pages/doctores/lista/lista.component';
import { ClistaComponent } from './componenst/doctores/clista/clista.component';
import { CformmedicoComponent } from './componenst/doctores/cformmedico/cformmedico.component';
import { FormmedicosComponent } from './pages/doctores/formmedicos/formmedicos.component';

@NgModule({
  declarations: [
    AppComponent,
    PloginComponent,
    CloginComponent,
    CrecuperapassComponent,
    PrecuperapassComponent,
    PinicioComponent,
    CbaseComponent,
    CmenuComponent,
    FormAddComponent,
    PlistComponent,
    ClistComponent,
    CformdataComponent,
    ListaComponent,
    ClistaComponent,
    CformmedicoComponent,
    FormmedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
