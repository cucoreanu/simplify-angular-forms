import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'big-text-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() invalidFeedbackMessage: string = '';

  readonly uuid: string = uuid();
}
