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
      // No errors to display
      this.isErrorDisplayed.set(false);
      return;
    }

    // Unsubscribe from previous control before subscribing to new one.
    // If the control changes, we want to stop listening to the old one (will probably never happen tho).
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
    // If the control is pristine, we don't want to show the error message unless the forceShowValidation flag is set.
    return this.isErrorDisplayed.set(!!this.control.errors && !this.control.pristine || this.forceShowValidation);
  }

  updateErrorMessage() {
    if (!this.control) {
      return this.errorMessage.set('');
    }
    // This takes only the error key.
    // If you need the data from the error object, you can implement a custom class for parsing.
    const errors = Object.keys(this.control.errors ?? {});

    if (errors.length === 0) {
      return this.errorMessage.set('');
    }
    return this.errorMessage.set(errorMessages.get(errors[0]) ?? '');
  }
}
