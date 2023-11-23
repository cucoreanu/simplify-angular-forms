import {Component, DestroyRef, Input, OnChanges, signal, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

const errorMessages = new Map<string, string>([
  ['required', 'This field is required'],
  ['email', 'This field must be a valid email'],
]);

@Component({
  selector: 'big-validation-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-result.component.html',
})
export class ValidationResultComponent implements OnChanges {
  private controlSubscription = Subscription.EMPTY;
  @Input() control?: AbstractControl;
  @Input() forceShowValidation: boolean = false;

  constructor(private destroyRef: DestroyRef) {
  }

  errorMessage = signal('');
  isErrorDisplayed = signal(false);

  ngOnChanges(changes: SimpleChanges) {

    if (changes['forceShowValidation']) {
      this.updateVisibility();
      this.updateErrorMessage();
    }

    if (changes['control']) {
      this.handleControlChange();
    }
  }

  private handleControlChange() {
    if (!this.control) {
      this.isErrorDisplayed.set(false);
      return;
    }

    this.controlSubscription.unsubscribe();
    this.controlSubscription = this.control.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.updateVisibility();
        this.updateErrorMessage();
      })
  }

  updateVisibility() {
    if (!this.control) {
      return this.isErrorDisplayed.set(false);
    }
    return this.isErrorDisplayed.set(!!this.control.errors && !this.control.pristine || this.forceShowValidation);
  }

  updateErrorMessage() {
    if (!this.control) {
      return this.errorMessage.set('');
    }
    const errors = Object.keys(this.control.errors ?? {});
    if (errors.length === 0) {
      return this.errorMessage.set('');
    }
    return this.errorMessage.set(errorMessages.get(errors[0]) ?? '');
  }
}
