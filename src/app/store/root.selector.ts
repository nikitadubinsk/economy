import {createSelector, createFeatureSelector} from '@ngrx/store';
import {RootState} from './root.state';

export const rootFeatureKey = 'root';

const state = createFeatureSelector<RootState>(rootFeatureKey);

export const name = createSelector(state, state => state.name);
export const role = createSelector(state, state => state.role);
export const isDarkMode = createSelector(state, state => state.isDarkMode);
export const loadingButton = createSelector(state, state => state.loadingButton);