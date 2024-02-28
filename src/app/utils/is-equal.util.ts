export function isEqual<T extends Object>(prev: T, curr: T): boolean {
  return Object.keys(curr).every(
    (key) => curr[key as keyof typeof curr] === prev[key as keyof typeof prev]
  );
}
