import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MultiplicacionComponent } from "./multiplicacion/multiplicacion/multiplicacion.component";
import { TemperaturaComponent } from "./Temperatura/temperatura/temperatura.component";
import { BoletosComponent } from "./Cinepolis/boletos/boletos.component";
import { FormDatosComponent } from "./practia_final/form-datos/form-datos.component";
import { ExamenComponent } from "./practia_final/examen/examen.component";
import { ResultadoComponent } from "./practia_final/resultado/resultado.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'multiplicacion', component: MultiplicacionComponent },
    { path: 'Temperatura', component: TemperaturaComponent },
    { path: 'Cinepolis', component: BoletosComponent },
    { path: 'form', component: FormDatosComponent },
    { path: 'examen', component: ExamenComponent },
    { path: 'resultado', component: ResultadoComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }