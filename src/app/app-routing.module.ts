import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { InicioComponent } from './components/inicio/inicio.component';
import { IntergalacticComponent } from './components/intergalactic/intergalactic.component';
import { InterplanetComponent } from './components/interplanet/interplanet.component';
import { CrewComponent }from './components/crew/crew.component'

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'Intergalactic', component: IntergalacticComponent },
    { path: 'Interplanet', component: InterplanetComponent },
    {path: 'Crew', component:CrewComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }