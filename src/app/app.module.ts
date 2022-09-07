import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './services/seguranca.service';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { MenuInformacoesComponent } from './menu-informacoes/menu-informacoes.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuClienteComponent,
    MenuInformacoesComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
