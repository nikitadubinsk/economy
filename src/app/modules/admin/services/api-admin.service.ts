import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root',
})
export class ApiAdminService extends ApiService {
    endpoints = {
        statistics: '/admin/statistics'
    };

    getStatistics(): Observable<void> {
        // return this.get<void>(this.endpoints.statistics).pipe(map(d => d.data));
        return of(undefined).pipe(delay(1000))
    }
}
