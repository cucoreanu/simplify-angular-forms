import { AbstractControlValueAccessor } from "./abstract-control-value-accessor";
import {FormControl} from "@angular/forms";
import {DestroyRef, Directive, Inject, OnDestroy, OnInit} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

/**
 * Use this class as base for components that require binding with NgModel.
 *
 * @description
 * The class extending this one will need the following meta-data in the component decorator:
 * ```typescript
 * ...
 * providers: [{
 *     provide: NG_VALUE_ACCESSOR,
 *     useExisting: forwardRef(() => SubClass),
 *     multi: true
 * }]
 * ...
 * ```
 *
 * Initializes the form control with the model and emits (ngModelChange) whenever the formControl.valueChanges event is
 * emitted
 */
@Directive()
export abstract class FormControlValueAccessorComponent<T> extends AbstractControlValueAccessor<T> implements OnInit {

  constructor(protected destroyRef: DestroyRef) {
    super();
  }

  abstract formControl: FormControl<T | null>;

  writeValue(obj: T): void {
    this.formControl.setValue(obj, { emitEvent: false });
  }

  setDisabledState(isDisabled: boolean) {
    const controlConfig = { emitEvent: false };
    isDisabled ? this.formControl.disable(controlConfig) : this.formControl.enable(controlConfig);
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => this.onChanged(value));
  }

}
