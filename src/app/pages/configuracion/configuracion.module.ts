import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ConfiguracionComponent } from './configuracion.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ConfiguracionComponent
  ],
})
export class ConfiguracionModule { }
