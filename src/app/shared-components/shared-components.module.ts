import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { GlobalConfirmDeleteComponent } from './global-confirm-delete/global-confirm-delete.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { SortTableComponent } from './sort-table/sort-table.component';

@NgModule({
  declarations: [
    PaginationComponent,
    GlobalConfirmDeleteComponent,
    FormFieldComponent,
    ConfirmButtonComponent,
    SortTableComponent,
  ],
  imports: [CommonModule],
  exports: [
    PaginationComponent,
    FormFieldComponent,
    ConfirmButtonComponent,
    SortTableComponent,
  ],
})
export class SharedComponentsModule {}
