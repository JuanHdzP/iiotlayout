import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISortFilter } from '../interfaces/sort-filter';
import { SortTable } from '../interfaces/sort-table';
import { ITableHeaders } from '../interfaces/table-headers';

@Component({
  selector: 'sort-table',
  template: `
    <div class="table-responsive table-hover">
      <table class="table mb-0">
        <thead>
          <tr>
            <th
              class="sorteable text-left {{
                sortFilter.sortBy == column.column
                  ? sortFilter.order == 'ASC'
                    ? 'sort-asc'
                    : sortFilter.order == 'DESC'
                    ? 'sort-desc'
                    : 'no-sort'
                  : 'no-sort'
              }}"
              *ngFor="let column of columns"
              (click)="sort(column.column)"
            >
              <strong>{{ column.displayName }}</strong>
            </th>
            <th class="text-center"><strong>Acciones</strong></th>
          </tr>
        </thead>
        <tbody>
          <!-- * Contenido del <tbody> (<tr>) -->
          <ng-content></ng-content>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      th.sort-asc {
        background-image: url('../../../assets/vendor/datatables/images/sort_asc.png');
        background-repeat: no-repeat;
        background-position: center right;
      }

      th.sort-desc {
        background-image: url('../../../assets/vendor/datatables/images/sort_desc.png');
        background-repeat: no-repeat;
        background-position: center right;
      }

      th.no-sort {
        background-image: url('../../../assets/vendor/datatables/images/sort_both.png');
        background-repeat: no-repeat;
        background-position: center right;
      }

      .sorteable {
        cursor: pointer;
      }
    `,
  ],
})
export class SortTableComponent implements OnInit {
  @Input() columns: ITableHeaders[] = [];
  @Output() onSort = new EventEmitter<ISortFilter>();
  sortFilter: ISortFilter = {
    sortBy: '',
    order: '',
  };
  constructor() {}

  ngOnInit(): void {}

  sort(column: string) {
    const { filterOrder, filterColumn } = new SortTable(
      column,
      this.sortFilter.sortBy,
      this.sortFilter.order
    ).sort();
    this.sortFilter.order = filterOrder;
    this.sortFilter.sortBy = filterColumn;
    this.onSort.emit(this.sortFilter);
  }
}
