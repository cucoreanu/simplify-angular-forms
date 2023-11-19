import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './big-form/app.config';
import { BigFormComponent } from './big-form/big-form.component';

bootstrapApplication(BigFormComponent, appConfig)
  .catch((err) => console.error(err));
