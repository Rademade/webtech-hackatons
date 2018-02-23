import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input('value') privateValue: string;
  @Input() type: string = 'text';
  public onChange: any = () => {};
  public onTouched: any = () => {};

  get value() {
    return this.privateValue;
  }
  set value(value) {
    this.privateValue = value;
    this.onChange(value);
    this.onTouched();
  }
  constructor() { }
  public registerOnChange(fn) {
    this.onChange = fn;
  }
  public registerOnTouched(fn) {
    this.onTouched = fn;
  }
  public writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
