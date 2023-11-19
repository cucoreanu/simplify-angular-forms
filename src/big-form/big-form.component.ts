import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'big-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent {
  title = 'angular-forms';
}
