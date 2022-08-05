import { FormBuilder } from "@angular/forms";
import { LoginForm } from "./form";
describe("Forms", () => {
  let component: LoginForm;

  beforeEach(() => (component = new LoginForm(new FormBuilder())));

  it("Should create a form with two fields", () => {
    expect(component.form.contains("email")).toBeTruthy();
    expect(component.form.contains("password")).toBeTruthy();
  });
});
