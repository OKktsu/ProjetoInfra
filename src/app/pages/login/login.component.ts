import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  iconSenha: string = 'bi bi-eye'
  visivel: string = 'password'

  mostrarSenha(){
    if(this.visivel === 'text'){
        this.iconSenha = 'bi bi-eye';
        this.visivel = 'password';
    }else{
      this.iconSenha = 'bi bi-eye-slash'
      this.visivel = 'text'
    }
  }
}
