import { ControlValueAccessor } from "@angular/forms";

export abstract class AbstractControlValueAccessor<T> implements ControlValueAccessor {
  onChanged!: (value: T | null) => void; // the new value can be null
  onTouched!: () => void;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  abstract writeValue(obj: T): void;
}
