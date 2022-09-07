import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from '../services/seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private seguranca: SegurancaService) { }

  ngOnInit(): void {
  }

  entrar(): void {
    this.seguranca.entrou = true;
    this.router.navigateByUrl("menucliente")
  }
  entrar2(): void {
    this.seguranca.entrou = true;
    this.router.navigateByUrl("menuAdmin")
  }
}
