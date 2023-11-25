import { bootstrapApplication } from '@angular/platform-browser';
import { BigFormComponent } from './big-form/big-form.component';

bootstrapApplication(BigFormComponent)
  .catch((err) => console.error(err));
