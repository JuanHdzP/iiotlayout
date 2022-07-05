import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CalendarioComponent } from './calndario.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CalendarioComponent
  ],
})
export class CalendarioModule { }
