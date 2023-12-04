import {Component, forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxComponent} from "../../big-form/components/checkbox/checkbox.component";
import {FormsModule, NG_VALUE_ACCESSOR, NgForm, ReactiveFormsModule} from "@angular/forms";
import {SelectComponent} from "../../big-form/components/select/select.component";
import {TextInputComponent} from "../../big-form/components/text-input/text-input.component";
import {ValidationResultComponent} from "../../big-form/components/validation-result/validation-result.component";
import {BillingForm} from "../../big-form/billing-address-form/billing-form.model";
import {getCountries} from "../../big-form/billing-address-form/country-options";
import {getUsStateOptions} from "../../big-form/billing-address-form/us-states-options";

@Component({
  selector: 'big-template-driven',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, ReactiveFormsModule, SelectComponent, TextInputComponent, ValidationResultComponent, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateDrivenComponent),
      multi: true,
    }
  ]
})
export class TemplateDrivenComponent {
  form: BillingForm = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    isShippingSameAsBilling: false,
    isFormSavedForNextTime: false,
  };

  countries = getCountries();
  usStates = getUsStateOptions();

  showFormValue() {
    console.warn(this.form)
  }
}
