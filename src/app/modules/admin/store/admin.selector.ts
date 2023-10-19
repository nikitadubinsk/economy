import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AdminState } from './admin.state';

export const adminFeatureKey = 'admin';

export const state = createFeatureSelector<AdminState>(adminFeatureKey);

export const statistics = createSelector(state, state => state.statistics);