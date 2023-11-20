import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TextInputComponent} from "./text-input/text-input.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'big-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextInputComponent, ReactiveFormsModule],
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent {
  title = 'angular-forms';

  firstNameControl = new FormControl<string>('Nick', {nonNullable: true});
}
