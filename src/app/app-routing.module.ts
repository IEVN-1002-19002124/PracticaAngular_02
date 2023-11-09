import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MultiplicacionComponent } from "./multiplicacion/multiplicacion/multiplicacion.component";
import { TemperaturaComponent } from "./Temperatura/temperatura/temperatura.component";
import { BoletosComponent } from "./Cinepolis/boletos/boletos.component";

const routes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'multiplicacion',component:MultiplicacionComponent},
    {path:'Temperatura',component:TemperaturaComponent},
    {path:'Cinepolis',component:BoletosComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}