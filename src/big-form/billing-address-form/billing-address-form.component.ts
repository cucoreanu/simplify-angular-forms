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
import {ValidationResultComponent} from "../validation-result/validation-result.component";

@Component({
  selector: 'big-billing-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent, SelectComponent, CheckboxComponent, ValidationResultComponent],
  templateUrl: './billing-address-form.component.html',
})
export class BillingAddressFormComponent implements BigFormSection<BillingForm> {

  readonly countries = getCountries();
  readonly usStates = getUsStateOptions();

  form: FormGroup = this.formBuilder.group<OnlyKeysOf<BillingForm>>({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    address2: ['', [Validators.required]],
    country: [this.countries.defaultValue, [Validators.required]],
    state: [this.usStates.defaultValue, [Validators.required]],
    zip: ['', [Validators.required]],
    isShippingSameAsBilling: false,
    isFormSavedForNextTime: false,
  });

  @Output() valueChanges = this.form.valueChanges;

  constructor(private formBuilder: FormBuilder) {
  }

}
