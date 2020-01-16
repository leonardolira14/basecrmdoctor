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
import { PdataComponent } from './pages/pacientes/pdata/pdata.component';
import { CresumendatapComponent } from './components/pacientes/cresumendatap/cresumendatap.component';
import { CdatosprincipalespComponent } from './components/pacientes/data/cdatosprincipalesp/cdatosprincipalesp.component';
import { CexpedientepComponent } from './components/pacientes/data/cexpedientep/cexpedientep.component';
import { CmedicinapComponent } from './components/pacientes/data/cmedicinap/cmedicinap.component';
import { CsociopComponent } from './components/pacientes/data/csociop/csociop.component';
import { CantecendetesmedicospComponent } from './components/pacientes/data/cantecendetesmedicosp/cantecendetesmedicosp.component';
import { CinformesmedicospComponent } from './components/pacientes/data/cinformesmedicosp/cinformesmedicosp.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask/';
import { ReactiveFormsModule } from '@angular/forms';
import { CsignosvitalespComponent } from './components/data/csignosvitalesp/csignosvitalesp.component';
import { CanalisispComponent } from './components/data/canalisisp/canalisisp.component';
export const DateFormats = {
  parse: {
    dateInput: ['DD-MM-YYYY']
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
    FormmedicosComponent,
    PdataComponent,
    CresumendatapComponent,
    CdatosprincipalespComponent,
    CexpedientepComponent,
    CmedicinapComponent,
    CsociopComponent,
    CantecendetesmedicospComponent,
    CinformesmedicospComponent,
    CsignosvitalespComponent,
    CanalisispComponent
  ],
  imports: [
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
