import { ITableColumn } from "../../../shared/interfaces/global-get-response";

export const BRANCHES_COLUMNS: ITableColumn[] = [
  {
    displayName: "Sensor",
    column: "b.sensor",
  },
  {
    displayName: "Estado",
    column: "b.status",
  },
  {
    displayName: "Area",
    column: "b.area",
  },
];
