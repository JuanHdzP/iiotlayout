import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AndonComponent } from './andon.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AndonComponent
  ],
})
export class AndonModule { }
