import { Inject, Injectable } from '@angular/core';
import {
  TuiNotification,
  TuiAlertOptions,
  TuiAlertService,
} from '@taiga-ui/core';

import { NOTIFICATION_ALERTS } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    @Inject(TuiAlertService) private readonly alertService$: TuiAlertService
  ) {}

  showSuccessMessage(
    msg = NOTIFICATION_ALERTS.SUCCESS,
    options: Partial<TuiAlertOptions<void>> = {}
  ): void {
    this.showMessage(msg, { ...options, status: TuiNotification.Success });
  }

  showWarningMessage(
    msg: string,
    options: Partial<TuiAlertOptions<void>> = {}
  ): void {
    this.showMessage(msg, { ...options, status: TuiNotification.Warning });
  }

  showErrorMessage(
    msg = NOTIFICATION_ALERTS.ERROR,
    options: Partial<TuiAlertOptions<void>> = {}
  ): void {
    this.showMessage(msg, { ...options, status: TuiNotification.Error });
  }

  showInfoMessage(
    msg: string,
    options: Partial<TuiAlertOptions<void>> = {}
  ): void {
    this.showMessage(msg, { ...options, status: TuiNotification.Info });
  }

  showMessage(msg: string, options: Partial<TuiAlertOptions<void>>): void {
    this.alertService$.open(msg, options).toPromise();
  }
}
