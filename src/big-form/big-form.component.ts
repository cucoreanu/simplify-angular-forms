import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TextInputComponent} from "./text-input/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BillingAddressFormComponent} from "./billing-address-form/billing-address-form.component";
import {BillingForm} from "./billing-address-form/billing-form.model";

@Component({
  selector: 'big-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextInputComponent, ReactiveFormsModule, BillingAddressFormComponent],
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.scss']
})
export class BigFormComponent {
  title = 'angular-forms';
  public billingForm?: BillingForm;

  onValueChanges($event: any) {
    console.warn($event)
  }

  onBillingAddressFormChange($event: BillingForm) {
    this.billingForm = $event;
  }
}
