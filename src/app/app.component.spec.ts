import { NavbarComponent } from "./advanced/navbar/navbar.component";
import { RouterTestingModule } from "@angular/router/testing";

import { By } from "@angular/platform-browser";
import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])], // for testing routes
      declarations: [AppComponent, NavbarComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Test-Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Test-Angular");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".content span")?.textContent).toContain(
      "Test-Angular app is running!",
    );
  });
});
// Testing for directives
describe("AppComponent routing", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("Should have a router-outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });
});
