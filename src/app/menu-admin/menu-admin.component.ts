import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  clientes: Array<string> = new Array()
  nome!: string
  cpf!: string
  dataNascimento!: string
  contaCorrente!: string
  agencia!: string


  constructor() { }

  ngOnInit(): void {


  }

  deletar(index: number) {

    this.clientes.splice(index, 1)


  }

  adicionar() {


    if (this.nome) {
      this.clientes.push(this.nome)
      this.nome = ""


    }

  }

}
