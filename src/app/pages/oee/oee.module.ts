import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { OeeComponent } from './oee.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    OeeComponent
  ],
})
export class OeeModule { }
