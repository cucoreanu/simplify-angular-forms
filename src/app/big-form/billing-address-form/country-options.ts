import {SelectItem} from "../components/select/select-item";

const countryOptions: SelectItem[] = [
  {label: 'Choose', value: ''},
  {label: 'United States', value: 'US'},
]

export function getCountries() {
  return {
    selectItems: [...countryOptions],
    defaultValue: countryOptions[0].value
  }
}
