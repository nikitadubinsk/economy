import { createAction, props } from '@ngrx/store';
import { NavigationPayload } from '../models';
import { rootFeatureKey } from './root.selector';
import { TuiAlertOptions } from '@taiga-ui/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { IRegisrtation } from '../models/auth.model';

export const navigateTo = createAction(
  `[${rootFeatureKey}] NAVIGATE_TO`,
  props<{ payload: NavigationPayload }>()
);
export const showSuccessMessage = createAction(
  `[${rootFeatureKey}] SHOW_SUCCESS_MESSAGE`,
  props<{ message?: string }>()
);
export const showErrorMessage = createAction(
  `[${rootFeatureKey}] SHOW_ERROR_MESSAGE`,
  props<{ message?: string; options?: Partial<TuiAlertOptions<void>> }>()
);
export const showWarningMessage = createAction(
  `[${rootFeatureKey}] SHOW_WARNING_MESSAGE`,
  props<{ message: string }>()
);
export const showInfoMessage = createAction(
  `[${rootFeatureKey}] SHOW_INFO_MESSAGE`,
  props<{ message: string }>()
);

export const loadRates = createAction(`[${rootFeatureKey}] LOAD_RATES`);
export const registrateUser = createAction(
  `[${rootFeatureKey}] REGISTRATION_USER`,
  props<{ info: IRegisrtation }>()
);
export const loadUserInfo = createAction(
  `[${rootFeatureKey}] LOAD_ROOT_USER_INFO`
);
export const loadPeopleInfo = createAction(
  `[${rootFeatureKey}] LOAD_PEOPLE_INFO`
);
export const loadedUserInfo = createAction(
  `[${rootFeatureKey}] LOADED_ROOT_USER_INFO`,
  props<{ name: string; role: string; operatorRoles?: string[] }>()
);
export const auth = createAction(
  `[${rootFeatureKey}] AUTH_USER`,
  props<{ login: string; password: string }>()
);
export const setLS = createAction(
  `[${rootFeatureKey}] SET_LS`,
  props<{ token: string }>()
);
export const logout = createAction(`[${rootFeatureKey}] LOGOUT`);
export const switchTheme = createAction(`[${rootFeatureKey}] SWITCH_THEME`);
export const turnOffLoadingButton = createAction(
  `[${rootFeatureKey}] TURN_OFF_LOADING_BUTTON`
);
export const updateUserInfo = createAction(
  `[${rootFeatureKey}] UPDATE_USER_INFO`,
  props<{
    typeInformationPerception: string;
    description?: string;
    telegramUserId?: string;
    photo?: string;
  }>()
);
export const loadUserPhoto = createAction(
  `[${rootFeatureKey}] LOAD_USER_PHOTO`,
  props<{
    photo: File;
    typeInformationPerception: string;
    description?: string;
    telegramUserId?: string;
  }>()
);
export const resetPassword = createAction(
  `[${rootFeatureKey}] RESET_PASSWORD`,
  props<{ login: string }>()
);
export const loadImage = createAction(
  `[${rootFeatureKey}] LOAD_IMAGE`,
  props<{
    file: File;
  }>()
);
export const loadedImage = createAction(
  `[${rootFeatureKey}] LOADED_IMAGE`,
  props<{
    name: string;
  }>()
);
export const resetImageName = createAction(
  `[${rootFeatureKey}] RESET_IMAGE_NAME`
);
