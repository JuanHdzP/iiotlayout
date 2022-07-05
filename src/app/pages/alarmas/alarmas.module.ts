import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AlarmasComponent } from './alarmas.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AlarmasComponent
  ],
})
export class AlarmasModule { }
