import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ISortFilter } from "../../../shared-components/interfaces/sort-filter";
import {
  IFilterRequest,
  ITableColumn,
} from "../../../shared/interfaces/global-get-response";
import { IPagination } from "../../../shared/interfaces/pagination";

import { IBranch } from "../interfaces/branche";

import { BRANCHES_COLUMNS } from "../interfaces/columns";

@Component({
  selector: "ngx-table",
  templateUrl: "./table.component.html",
  styles: [],
})
export class TableComponent implements OnInit {
  branches: IBranch[] = [];
  pagination: IPagination;
  columns: ITableColumn[] = BRANCHES_COLUMNS;
  filter: IFilterRequest = {
    page: 1,
    limit: 5,
    order: "",
    sortBy: "",
    search: "",
  };
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  changePage(page: number) {
    this.filter.page = page;
  }

  sort(sortFilter: ISortFilter) {
    this.filter.sortBy = sortFilter.sortBy;
    this.filter.order = sortFilter.order;
  }

  onSearch(search: string) {
    this.filter.page = 1;
    this.filter.search = search;
  }
}
