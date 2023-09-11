import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() value: string | number = '';
  @Input() disabled = false;
  @Input() type: 'text' | 'number' | 'date' = 'text';

  onTouched: () => void = () => {};
  onChange: (value: string | number) => void = () => {};

  constructor() {}
  writeValue(obj: string | number): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  setValue(val: string | number) {
    if (this.disabled) {
      return;
    }
    if (this.type == 'number') {
      val = parseFloat(<string>val);
    }

    this.value = val;
    this.onChange(this.value);
    this.onTouched();
  }
}
