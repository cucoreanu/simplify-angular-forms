import {SelectItem} from "../select/select-item";

const usStatesOptions: SelectItem[] = [
  {label: 'Choose', value: ''},
  {label: 'California', value: 'CA'},
  {label: 'Nevada', value: 'NV'},
]

export function getUsStateOptions() {
  return {
    selectItems: [...usStatesOptions],
    defaultValue: usStatesOptions[0].value
  }
}
