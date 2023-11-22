import {Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControlValueAccessorComponent} from "../form-control-value-accessor.component";
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'big-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent extends FormControlValueAccessorComponent<boolean> {

  formControl = new FormControl<boolean>(false, {nonNullable: true});
  readonly uuid: string = uuid();

  @Input() label: string = '';
}
