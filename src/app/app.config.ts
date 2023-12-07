import { ApplicationConfig } from '@angular/core';
import {provideRouter} from "@angular/router";
import {BigFormComponent} from "./big-form/big-form.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: BigFormComponent
      }
    ])
  ]
};
