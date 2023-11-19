import { TestBed } from '@angular/core/testing';
import { BigFormComponent } from './big-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigFormComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BigFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-forms' title`, () => {
    const fixture = TestBed.createComponent(BigFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-forms');
  });
});
