export class SortTable {
  constructor(
    private column: string,
    private sortFilterColumn: string,
    private sortFilterOrder: string
  ) {
    this.sort();
  }

  sort() {
    if (this.sortFilterColumn == this.column) {
      if (this.sortFilterOrder == '') {
        this.sortFilterOrder = 'ASC';
      } else if (this.sortFilterOrder == 'ASC') {
        this.sortFilterOrder = 'DESC';
      } else {
        this.sortFilterOrder = '';
      }
    } else {
      this.sortFilterOrder = 'ASC';
      this.sortFilterColumn = this.column;
    }

    return {
      filterOrder: this.sortFilterOrder,
      filterColumn: this.sortFilterColumn,
    };
  }
}
