import {Observable} from "rxjs";
import {OnlyKeysOf} from "./only-keys-of.type";
import {FormGroup} from "@angular/forms";

/**
 * Use this interface to define a new section of the Big Form.
 * T - the form value type
 * */
export interface BigFormSection<T> {

  form: FormGroup<OnlyKeysOf<T>>;

  valueChanges: Observable<T>
}
