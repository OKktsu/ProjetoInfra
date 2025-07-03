import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { ItensComponent } from './pages/itens/itens.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'historico', component: HistoricoComponent},
    {path: 'itens', component: ItensComponent},
    {path: 'login', component: LoginComponent},

];
