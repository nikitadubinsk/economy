import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, map, pluck} from 'rxjs/operators';
import {mockUserRates} from '../mocks/user-rates.mock';
import {IUserRate} from '../models';
import {IAuthResponse, ILoginForm, IRegisrtation} from '../models/auth.model';

import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root',
})
export class ApiAuthService extends ApiService {
    endpoints = {
        auth: '/auth/login',
        logout: '/auth/logout',
        rates: '/auth/rates',
        registration: '/auth/registration',
        info: '/auth/info',
        photo: '/userPhoto',
        resetPassword: '/auth/resetPassword'
    };

    authorize(params: ILoginForm): Observable<{token: string}> {
        return this.post<{token: string}, ILoginForm>(this.endpoints.auth, params).pipe(map(d => d.data));
    }

    logout(): Observable<IAuthResponse> {
        return this.post<IAuthResponse, void>(this.endpoints.logout).pipe(map(d => d.data));
    }

    getRates(): Observable<IUserRate[]> {
        return this.get<IUserRate[]>(this.endpoints.rates).pipe(map(d => d.data));
    }

    registrate(info: IRegisrtation): Observable<{token: string}> {
        return this.post<{token: string}, IRegisrtation>(this.endpoints.registration, info).pipe(map(d => d.data));
    }

    updateUserInfo(
        typeInformationPerception: string,
        description?: string,
        telegramUserId?: string,
        photo?: string
    ): Observable<void> {
        return this.post<
            void,  {typeInformationPerception: string; description?: string; telegramUserId?: string; photo?: string}
        >(this.endpoints.info, {typeInformationPerception, description, telegramUserId, photo}).pipe(
            map(d => d.data)
        );
    }

    loadUserPhoto(photo: File): Observable<{name: string}> {
        return this.sendFile<{name: string}, File>(this.endpoints.photo, photo).pipe(map(d => d.data));
    }

    userInfo(): Observable<{name: string; role: string; operatorRoles: string[]; typeInformationPerception: string}> {
        return this.get<{name: string; role: string; operatorRoles: string[]; typeInformationPerception: string}>(
            this.endpoints.info
        ).pipe(map(d => d.data));
    }

    resetPassword(login: string): Observable<void> {
        return this.post<void, {login: string}>(this.endpoints.resetPassword, {login}).pipe(map(d => d.data));
    }
}
