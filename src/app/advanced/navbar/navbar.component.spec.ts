import { RouterLinkWithHref } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { By } from "@angular/platform-browser";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

describe("NavbarComponent routing", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it("Should has a link to doctors page", () => {
    fixture = TestBed.createComponent(NavbarComponent);
    const elementsDebug = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref),
    );

    let exists = false;

    for (const elem of elementsDebug) {
      if (elem.attributes["routerLink"] === "/doctors") {
        exists = true;
        break;
      }
    }
    expect(exists).toBeTruthy();
  });
});
