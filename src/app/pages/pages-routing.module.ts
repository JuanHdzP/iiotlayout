import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { CalendarioComponent } from './calendario/calndario.component';
import { OeeComponent } from './oee/oee.component';
import { AndonComponent } from './andon/andon.component';
import { ExportarComponent } from './exportar/exportar.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'visualizacion',
      component: VisualizacionComponent,
    },
    {
      path: 'alarmas',
      component: AlarmasComponent,
    },
    {
      path: 'estadisticas',
      component: EstadisticasComponent,
    },
    {
      path: 'calendario',
      component: CalendarioComponent,
    },
    {
      path: 'oee',
      component: OeeComponent,
    },
    {
      path: 'andon',
      component: AndonComponent,
    },
    {
      path: 'exportar',
      component: ExportarComponent,
    },
    {
      path: 'configuracion',
      component: ConfiguracionComponent,
    },
    {
      path: '',
      redirectTo: 'visualizacion',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
