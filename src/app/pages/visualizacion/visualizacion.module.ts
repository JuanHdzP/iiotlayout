import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbTabsetModule,
  NbSelectModule,
  NbInputModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { TableComponent } from "./table/table.component";
import { VisualizacionComponent } from "./visualizacion.component";
import { GraficoComponent } from "./grafico/grafico.component";
import { NbButtonModule } from "@nebular/theme";
import { SharedComponentsModule } from "../../shared-components/shared-components.module";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbTabsetModule,
    NbSelectModule,
    NbButtonModule,
    SharedComponentsModule,
    NbInputModule,
  ],
  declarations: [VisualizacionComponent, TableComponent, GraficoComponent],
})
export class VisualizacionModule {}
