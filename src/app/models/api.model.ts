import {HttpErrorResponse} from '@angular/common/http';

export interface IAPIError {
    title: string;
    message: string;
    code: string;
    status: number;
    timestamp: number;
}

export interface IApiResponse<T, E = IHttpMetaData> {
    data: T;
    errors: Array<{
        code: TypeError;
        title: string;
        source: keyof T;
    }>;
    meta?: E;
}

export interface IHttpMetaData {
    total: number;
}

export interface IPageable {
    totalElements: number;
    pageSize: number;
    totalPages?: number;
    pageNumber?: number;
}

export interface IHttpPageMetaData {
    pageable?: IPageable;
}

export interface IApiErrorList {
    errors: IAPIError[];
}

export interface ICommonApiParams {
    page?: number;
    size?: number;
}

export interface IHttpErrorResponse extends HttpErrorResponse {
    readonly error: IAPIError | IApiErrorList;
}

export interface IAPICatchError extends Error {
    errors: IAPIError[];
    status: number;
}