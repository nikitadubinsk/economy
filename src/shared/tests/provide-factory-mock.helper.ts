import { instance } from 'ts-mockito';

export function provideFactoryMock<T, V>(provide: T, mock: V) {
  return {
    provide,
    useFactory: () => instance(mock),
  };
}
