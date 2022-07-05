import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ExportarComponent } from './exportar.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ExportarComponent
  ],
})
export class ExportarModule { }
