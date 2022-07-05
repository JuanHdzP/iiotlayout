export interface IPagination {
  /**
   * @param {number} currentPage - pagina actual
   * @param {number} itemCount - numero de elementos en la pagina actual
   * @param {number} itemsPerPage - numero de elementos por pagina
   * @param {number[]} links - botones de la paginacion
   * @param {number} totalItems - total de elementos
   * @param {number} totalPages - total de paginas
   */
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  labels: { from: number; to: number };
  links: number[];
  totalItems: number;
  totalPages: number;
}

export interface IPaginationRequest {
  page: number;
  limit: number;
  sortBy?: string;
  order?: string;
  search?: string;
}
