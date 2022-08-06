import { FormBuilder } from '@angular/forms';
import { LoginForm } from './form';
describe('Forms', () => {
  let component: LoginForm;

  beforeEach(() => (component = new LoginForm(new FormBuilder())));

  it('Should create a form with two fields, email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('Email field should be required', () => {
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('The email field should have the correct email format', () => {
    const control = component.form.get('email');
    control?.setValue('lala@lala.com');
    expect(control?.valid).toBeTruthy();
  });
});
