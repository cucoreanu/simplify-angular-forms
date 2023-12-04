import { ApplicationConfig } from '@angular/core';
import {provideRouter} from "@angular/router";
import {BigFormComponent} from "./big-form/big-form.component";
import {TemplateDrivenComponent} from "./template-driven-vs-reactive/template-driven/template-driven.component";
import {TemplateDrivenVsReactiveComponent} from "./template-driven-vs-reactive/template-driven-vs-reactive.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: BigFormComponent
      },
      {
        path: 'template-driven-vs-reactive',
        component: TemplateDrivenVsReactiveComponent,
        children: [
          {
            path: '',
            redirectTo: 'template-driven',
            pathMatch: 'full'
          },
          {
            path: 'template-driven',
            component: TemplateDrivenComponent
          }
        ]
      }
    ])
  ]
};
