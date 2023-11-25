import {Component, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BigFormSection} from "../big-form.section";
import {PaymentDetailsForm} from "./payment-details-form.model";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {OnlyKeysOf} from "../only-keys-of.type";
import {Observable} from "rxjs";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {ValidationResultComponent} from "../components/validation-result/validation-result.component";

@Component({
  selector: 'big-payment-details-form',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ReactiveFormsModule, ValidationResultComponent],
  templateUrl: './payment-details-form.component.html'
})
export class PaymentDetailsFormComponent implements BigFormSection<PaymentDetailsForm> {

  form = this.formBuilder.group<OnlyKeysOf<PaymentDetailsForm>>({
    cardHolderName: ['', [Validators.required]],
    creditCardNumber: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]],
    cvv: ['', [Validators.required]]
  });

  @Output() valueChanges = this.form.valueChanges as Observable<PaymentDetailsForm>;

  constructor(private formBuilder: FormBuilder) {
  }

}
