import { SimpleChange } from '@angular/core';
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormGroup,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';

// change detection

/**
 * Типизация для SimpleChange
 */
export interface ISimpleChange<T> extends SimpleChange {
  /**
   * Думаю будет лишним расширять интерфейс до обычного объекта,
   * т.к. в первую очередь нам нужно знать есть ли у него нижеследующие поля
   */
  // new (previousValue: T, currentValue: T, firstChange: boolean): T;

  previousValue: T;
  currentValue: T;
  firstChange: boolean;
  isFirstChange(): boolean;
}

/**
 * Типизация для SimpleChanges
 */
export type TSimpleChanges<T> = { [P in keyof T]: ISimpleChange<T[P]> };

export enum NG_STATUSES {
  VALID = 'VALID',
  INVALID = 'INVALID',
  PENDING = 'PENDING',
  DISABLED = 'DISABLED',
}

// forms

/**
 * Типизация для AbstractControl
 */
export interface IAbstractControl<T> extends AbstractControl {
  readonly valueChanges$: Observable<T>;
  readonly statusChanges$: Observable<T>;
  readonly value: T;
  patchValue(value: T, options?: Object): void;
}

type IAbstractControlsMap<T extends {}> = {
  [K in keyof T]: T[K] extends Array<infer X>
    ? IFormArray<X>
    : T[K] extends Partial<unknown>
    ? IAbstractControl<T[K]>
    : T[K] extends {}
    ? IFormGroup<T[K]>
    : IAbstractControl<T[K]>;
};

/**
 * Типизация для FormGroup
 *
 * @example
 *
 *   formGroup = this.fb.group({
 *       type: [null],
 *       list: this.fb.array([])
 *       map: this.fb.group({
 *           a: [0],
 *           b: ['']
 *       })
 *   }) as IFormGroup<{
 *       type: ITemplateReport | null;
 *       list: IReportField[];
 *       map: {
 *           a: number;
 *           b: string;
 *       }
 *   }>;
 *
 */
export interface IFormGroup<T extends {}> extends UntypedFormGroup {
  readonly valueChanges$: Observable<T>;
  readonly statusChanges$: Observable<T>;
  readonly value: T;

  controls: IAbstractControlsMap<T>;

  patchValue(
    value: { [K in keyof T]?: T[K] | null },
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void;

  get<K extends keyof T>(path: K): IAbstractControl<T[K]> | null;
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get<K extends keyof T>(path: K[]): IAbstractControl<T[K]> | null;
}

/**
 * Типизация для FormArray
 */
export interface IFormArray<T> extends UntypedFormArray {
  controls: IAbstractControl<T>[];

  push(control: IAbstractControl<T>): void;
}

export interface IValidationErrors {
  [key: string]: unknown;
}

export interface IValidator<T> extends Validator {
  validate(control: IAbstractControl<T>): IValidationErrors | null;
}
