import { Injectable, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IHttpErrorResponse, IAPIError } from '../models';
import { AlertService } from '../services/alert.service';

type HTTPRequestBody = {} | null;
type HTTPResponseBody = {} | null;

export interface IAPICatchError extends Error {
  errors: IAPIError[];
  status: number;
}
/**
 * @class ApiInterceptor
 * Преобразует url
 * Ковертирует ошибки от сервера
 */
@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  private http: HttpClient | null = null;

  constructor(
    private readonly router: Router,
    private readonly alertService$: AlertService
  ) {}

  intercept(
    request: HttpRequest<HTTPRequestBody>,
    next: HttpHandler
  ): Observable<HttpEvent<HTTPResponseBody>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return next.handle(request).pipe(
      catchError(({ message, status }: IHttpErrorResponse): never => {
        let err: IAPICatchError | null = null;
        if (status === 401 || status === 403) {
          this.router.navigate(['/auth'], { skipLocationChange: true });
        } else {
          this.alertService$.showErrorMessage(message);
        }

        throw err;
      })
    );
  }
}
