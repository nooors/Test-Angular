import { IncreaserComponent } from "./increaser.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Incremendator Component", () => {
  let component: IncreaserComponent;
  let fixture: ComponentFixture<IncreaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncreaserComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncreaserComponent);
    component = fixture.componentInstance;
  });

  it("Should show label ", () => {
    component.label = "Load Progress";
    fixture.detectChanges(); // Shoot changeDetections
    const elem: HTMLElement = fixture.debugElement.query(By.css("h3"))
      .nativeElement;

    expect(elem.innerHTML).toContain(component.label);
  });
});
