import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./increaser.component.html",
  styles: [],
})
export class IncreaserComponent implements OnInit {
  @ViewChild("txtProgress") txtProgress!: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input("name") label: string = "Label";
  @Input() progress: number = 50;

  // tslint:disable-next-line:no-output-rename
  @Output("updateValue") updateValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.updateValue.emit(this.progress);
  }

  valueChange(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    this.updateValue.emit(this.progress);
  }
}
