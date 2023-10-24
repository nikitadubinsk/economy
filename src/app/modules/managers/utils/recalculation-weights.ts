export function recalculationWeights<T>(list: Array<T>): Array<T> {
  for (let i = 0; i < list.length; i++) {
    list[i] = {
      ...list[i],
      weight: i + 1,
    };
  }

  return list;
}
