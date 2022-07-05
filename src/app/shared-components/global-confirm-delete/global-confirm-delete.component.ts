import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Observable } from 'rxjs';

export interface DialogData {
  deleteMethod: Observable<Object>;
}

@Component({
  selector: 'app-global-confirm-delete',
  templateUrl: './global-confirm-delete.component.html',
  styleUrls: ['./global-confirm-delete.component.css'],
})
export class GlobalConfirmDeleteComponent
  extends SimpleModalComponent<DialogData, boolean>
  implements OnInit, DialogData
{
  deleteMethod: Observable<Object>;
  loading: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  confirm() {
    this.loading = true;
    this.deleteMethod.subscribe(
      (data) => {
        this.loading = false;
        this.result = true;
        this.close();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
