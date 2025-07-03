import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rotaAtual: string = '';
  parametrosRota: any = {};
  queryParams: any = {};

  constructor(
    private router: Router,
  ) {
  }

  verificarRota(): boolean {
  console.log(this.router.url);
   return "/login" != this.router.url;
  }
  verificarPagina(rota: string): boolean{
    console.log(this.router.url)
    return this.router.url == rota
  }
}



