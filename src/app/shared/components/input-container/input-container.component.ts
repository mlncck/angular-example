import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-test-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputContainerComponent implements OnInit {

  @Input() label: string;
  @Input() required: boolean;
  @Input() control: AbstractControl;

  @HostBinding('class.input-container--error')
  get hasErrorClass() {
    return this.control && this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get isRequired() {
    if (this.control && this.control.validator) {
      const validators = this.control.validator({} as AbstractControl);
      return validators && validators.hasOwnProperty('required');
    } else if (this.required) {
      return this.required;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
