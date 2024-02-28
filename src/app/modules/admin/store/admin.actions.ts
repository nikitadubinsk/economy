import { createAction, props } from '@ngrx/store';
import { adminFeatureKey } from './admin.selector';

export const loadStatistics = createAction(
  `[${adminFeatureKey}] LOAD_STATISTICS`
);
// export const loadedStatistics = createAction(
//     `[${adminFeatureKey}] LOADED_STATISTICS`,
//     props<{
//         statistics: IAdminStatistics;
//     }>()
// );
