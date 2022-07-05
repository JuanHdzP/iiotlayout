import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EstadisticasComponent } from './estadisticas.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    EstadisticasComponent
  ],
})
export class EstadisticasModule { }
