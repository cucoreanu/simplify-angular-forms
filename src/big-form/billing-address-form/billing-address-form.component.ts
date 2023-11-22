import {Component, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BigFormSection} from "../big-form-section.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextInputComponent} from "../text-input/text-input.component";
import {SelectComponent} from "../select/select.component";
import {getCountries} from "./country-options";
import {getUsStateOptions} from "./us-states-options";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {BillingForm} from "./billing-form.model";
import {OnlyKeysOf} from "../only-keys-of.type";

@Component({
  selector: 'big-billing-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent, SelectComponent, CheckboxComponent],
  templateUrl: './billing-address-form.component.html',
})
export class BillingAddressFormComponent implements BigFormSection<BillingForm> {

  readonly countries = getCountries();
  readonly usStates = getUsStateOptions();

  form: FormGroup = this.formBuilder.group<OnlyKeysOf<BillingForm>>({
    firstName: ['', [Validators.required, Validators.minLength(1)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    address2: ['', [Validators.required, Validators.minLength(5)]],
    country: [this.countries.defaultValue, [Validators.required, Validators.minLength(2)]],
    state: [this.usStates.defaultValue, [Validators.required, Validators.minLength(2)]],
    zip: ['', [Validators.required, Validators.minLength(5)]],
    isShippingSameAsBilling: false,
    isFormSavedForNextTime: false,
  });

  constructor(private formBuilder: FormBuilder) {
  }

  markAsTouched(): void {
    this.form.markAllAsTouched();
  }

  @Output() valueChanges = this.form.valueChanges;

}
