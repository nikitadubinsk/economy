import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { EHttpMethod } from '../consts/http-method.enum';
import { IDictionary } from '../models/dictionary.model';
import { IParams } from '../models/type.model';
import { IApiResponse, IHttpMetaData } from '../models/api.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TuiFileLike } from '@taiga-ui/kit';

export interface IHttpParams {
  [key: string]: string | string[];
}

export enum TypeError {
  VALIDATION = 'VALIDATION',
}

export interface IHttpOptions {
  params: IHttpParams;
}

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  private readonly _baseUrl = environment.BASE_URL;

  constructor(protected readonly http: HttpClient) {}

  abstract endpoints: IDictionary<string>;

  protected get<T, S = IParams, E = IHttpMetaData>(
    endpoint: string,
    params?: S
  ): Observable<IApiResponse<T, E>> {
    return this.request(EHttpMethod.GET, endpoint, params);
  }

  protected post<T, S = IParams, P = IParams>(
    endpoint: string,
    body?: S,
    params?: P
  ): Observable<IApiResponse<T>> {
    return this.request(EHttpMethod.POST, endpoint, params, body);
  }

  protected put<T, S = IParams, P = IParams>(
    endpoint: string,
    body?: S,
    params?: P
  ): Observable<IApiResponse<T>> {
    return this.request(EHttpMethod.PUT, endpoint, params, body);
  }

  protected delete<T, S = IParams>(
    endpoint: string,
    params?: S,
    body?: S
  ): Observable<IApiResponse<T>> {
    return this.request(EHttpMethod.DELETE, endpoint, params, body);
  }

  protected sendFile<T, P = IParams, E = IHttpMetaData>(
    endpoint: string,
    file: File,
    params?: P
  ) {
    const { url, queryParams } = this.parseUrl(endpoint, params || {});
    const formData = new FormData();

    formData.append('file', file);

    return this.http
      .request<IApiResponse<T, E>>(EHttpMethod.POST, url, {
        params: new HttpParams({ fromObject: queryParams }),
        observe: 'response',
        body: formData,
      })
      .pipe(
        map((resp) => resp.body),
        map(this.parseData)
      );
  }

  private request<T, S = IParams, P = IParams, E = IHttpMetaData>(
    method: EHttpMethod,
    endpoint: string,
    params?: P,
    body?: S
  ): Observable<IApiResponse<T, E>> {
    const { url, queryParams } = this.parseUrl(endpoint, params ? params : {});

    return this.http
      .request<IApiResponse<T, E>>(method, url, {
        params: queryParams,
        observe: 'response',
        body,
      })
      .pipe(
        map((resp) => resp.body),
        map(this.parseData)
      );
  }

  private parseUrl<S>(
    endpoint: string,
    params: S
  ): {
    url: string;
    queryParams: IHttpParams;
  } {
    if (!endpoint) {
      throw new Error(`Попытка обратиться ${endpoint}`);
    }
    const httpParams = this.convertParams<S>(params);
    const { url, queryParams } = this.parseEndpoint(endpoint, httpParams);

    const resolveUrl = this.resolveUrl(url);

    if (/null|undefined|\[\w*\]/gi.test(resolveUrl)) {
      throw new Error(`Запрос ${resolveUrl} с ошибками. Endpoint: ${endpoint}`);
    }

    return {
      url: resolveUrl,
      queryParams,
    };
  }

  private parseEndpoint(
    endpoint: string,
    params: IHttpParams
  ): { url: string; queryParams: IHttpParams } {
    const reUrlSegment = /\/?\s*:(\w+)\s*\/?/g;

    const url = endpoint.replace(reUrlSegment, (_, name: string) => {
      if (params && Object.prototype.hasOwnProperty.call(params, name)) {
        const segment = `/${params[name]}/`;

        delete params[name];

        return segment;
      }

      return '/';
    });

    return { url, queryParams: params };
  }

  private resolveUrl(url: string): string {
    return `${this._baseUrl}${encodeURI(url)}`.replace(
      /(^|[^:/]|\/)(\/{2,})/g,
      '$1/'
    );
  }

  private convertParams<S>(params: S): IHttpParams {
    const httpParams: IHttpParams = {};

    for (const key of Object.keys(params)) {
      if (params[key as keyof S] != null) {
        httpParams[key] = '' + params[key as keyof S];
      }
    }

    return httpParams;
  }

  private parseData<T, E = IHttpMetaData>(
    response: IApiResponse<T, E> | null
  ): IApiResponse<T, E> {
    return response && response.data
      ? response
      : { data: response as unknown as T, meta: undefined, errors: [] };
  }
}
