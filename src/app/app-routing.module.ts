import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { MenuInformacoesComponent } from './menu-informacoes/menu-informacoes.component';
import { SegurancaService } from './services/seguranca.service';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: "menucliente", component: MenuClienteComponent, canActivate: [SegurancaService]},
  {path: "menuinformacoes", component: MenuInformacoesComponent, canActivate: [SegurancaService]},
  {path: "menuAdmin", component: MenuAdminComponent, canActivate: [SegurancaService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
