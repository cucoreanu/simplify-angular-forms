import {Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { v4 as uuid } from 'uuid';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {FormControlValueAccessorComponent} from "../form-control-value-accessor.component";

@Component({
  selector: 'big-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent extends FormControlValueAccessorComponent<string> {

  formControl = new FormControl<string>('', {nonNullable: true});

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() invalidFeedbackMessage: string = '';

  readonly uuid: string = uuid();
}
