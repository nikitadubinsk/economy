import {Action, createReducer, on} from '@ngrx/store';
import { auth, loadedUserInfo, resetPassword, switchTheme, turnOffLoadingButton } from './root.actions';
import {initialState, RootState} from './root.state';

const reducer = createReducer(
    initialState,
    on(auth, (state) => ({
        ...state,
        loadingButton: true,
    })),
    on(loadedUserInfo, (state, {name, role, operatorRoles}) => ({
        ...state,
        name,
        role,
        operatorRoles
    })),
    on(switchTheme, (state) => ({
        ...state,
        isDarkMode: !state.isDarkMode
    })),
    on(turnOffLoadingButton, (state) => ({
        ...state,
        loadingButton: false
    })),
    on(resetPassword, (state) => ({
        ...state,
        loadingButton: true
    })),
);

export function rootReducer(state: RootState | undefined, action: Action) {
    return reducer(state, action);
}
