import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from '../../shared/interfaces/pagination'; 

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  /**
   * @param {IPagination} pagination - Recive los parametros de la paginación
   * @param {EventEmitter} changePage - Emite el evento al componente padre cuando se cambia de pagina
   */

  @Input() pagination: IPagination;
  @Output() changePage = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onChangePage(page: number) {
    this.changePage.emit(page);
  }
}
