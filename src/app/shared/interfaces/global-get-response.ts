import { IPagination } from "./pagination";

export interface IGlobalGetResponse<T> {
  items: T[];
  meta: IPagination;
}

export interface IFilterRequest {
  page: number;
  limit: number;
  sortBy?: string;
  order?: string;
  search?: string;
}

export interface ITableColumn {
  displayName: string;
  column: string;
}
