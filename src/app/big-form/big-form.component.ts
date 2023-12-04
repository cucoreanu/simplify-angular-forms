import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {BillingAddressFormComponent} from "./billing-address-form/billing-address-form.component";
import {BillingForm} from "./billing-address-form/billing-form.model";
import {TextInputComponent} from "./components/text-input/text-input.component";
import {PaymentDetailsFormComponent} from "./payment-details-form/payment-details-form.component";
import {PaymentDetailsForm} from "./payment-details-form/payment-details-form.model";

@Component({
  selector: 'big-form',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ReactiveFormsModule, BillingAddressFormComponent, PaymentDetailsFormComponent],
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent {
  billingForm?: BillingForm;
  paymentDetailsForm?: PaymentDetailsForm;

  onValueChanges($event: any) {
    console.warn($event)
  }

  onBillingAddressFormChange($event: BillingForm) {
    this.billingForm = $event;
  }

  onPaymentDetailsFormChange($event: PaymentDetailsForm) {
    this.paymentDetailsForm = $event;
  }
}
