import { IncreaserComponent } from "./increaser.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Increaser Component", () => {
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

  it("Should display the progress value into the input", () => {
    component.valueChange(5);
    // init Angular Change Detection
    fixture.detectChanges();

    // Sometimes it can be delayed, so we do next to ensure change detection is fullfilled
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css("input"));
      const elem = input.nativeElement;

      expect(elem.value).toBe("55");
    });
  });

  it("Should add or decrease 5 on button click", () => {
    const buttons = fixture.debugElement.queryAll(By.css(".btn-primary"));
    // returns an array with all the elements with the specified class

    buttons[0].triggerEventHandler("click", null);
    expect(component.progress).toBe(45);

    buttons[1].triggerEventHandler("click", 50);
    expect(component.progress).toBe(50);
  });

  // Testing the component HTML
  it("Should display progress in component title", () => {
    const buttons = fixture.debugElement.queryAll(By.css(".btn-primary"));
    buttons[0].triggerEventHandler("click", null);

    // Activating change detection
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(By.css("h3"))
      .nativeElement;

    expect(elem.innerHTML).toContain("45"); // We are in the HTML so the value is a string
  });
});
