import {Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {v4 as uuid} from 'uuid';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {FormControlValueAccessorComponent} from "../form-control-value-accessor.component";
import {SelectItem} from "./select-item";

@Component({
  selector: 'big-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends FormControlValueAccessorComponent<string> {

  formControl = new FormControl<string>('', {nonNullable: true});
  readonly uuid: string = uuid();

  @Input() options: SelectItem[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() invalidFeedbackMessage: string = '';
}
