import { moveItemInArray } from '@angular/cdk/drag-drop';
import { recalculationWeights } from './recalculation-weights';

export function getChangedWeightsList<T>(
  entities: T[],
  indexFrom: number,
  indexTo: number
): T[] {
  const list = [...entities];

  moveItemInArray(list, indexFrom, indexTo);
  recalculationWeights(list);

  return [...list];
}
