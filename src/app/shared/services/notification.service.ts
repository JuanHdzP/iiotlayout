import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastrService: ToastrService) {}

  recordCreated() {
    this.globalNotification('success', 'Registro guardado');
  }

  recordUpdated() {
    this.globalNotification('success', 'Registro actualizado');
  }

  recordDeleted() {
    this.globalNotification('success', 'Registro borrado');
  }

  globalError() {
    this.globalNotification('error', 'Ha ocurrido un error', 'Error');
  }

  customNotification(
    type: 'success' | 'warning' | 'error' | 'info',
    message: string,
    title?: string
  ) {
    this.globalNotification(type, message, title);
  }

  private globalNotification(
    type: 'success' | 'warning' | 'error' | 'info',
    message: string,
    title?: string
  ) {
    this.toastrService[type](message, title, {
      closeButton: true,
      progressBar: true,
    });
  }
}
