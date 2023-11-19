import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TextInputComponent} from "./text-input/text-input.component";

@Component({
  selector: 'big-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextInputComponent],
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent {
  title = 'angular-forms';
}
