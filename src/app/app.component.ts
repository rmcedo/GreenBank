import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from './services/seguranca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GreenBank';
  links!: Array<any>;

  constructor(private router: Router,public seguranca: SegurancaService) {}

  ngOnInit(): void {
    this.links = new Array();
    this.links.push(
      {
        rota: "menuinformacoes",
        textContent: "overview",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-home",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "messages",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-envelope",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "workout",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-list",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "calendar",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-calendar",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "goals",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-signal",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "achivements",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-trophy",
        class_span: "menu__text"
      }
    )
    this.links.push(
      {
        rota: "",
        textContent: "measurements",
        class_a: "menu__item",
        class_i: "menu__icon fa fa-angle-left",
        class_span: "menu__text"
      }
    )


  }
  sair(): void {

    this.seguranca.entrou = false;
    this.router.navigateByUrl("")

  }
}
