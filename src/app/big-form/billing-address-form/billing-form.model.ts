export interface BillingForm {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  zip: string;
  isShippingSameAsBilling: boolean;
  isFormSavedForNextTime: boolean;
}
