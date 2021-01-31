import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormActionsComponent } from '../form-actions/form-actions.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { notFirstChange } from '../../utils/angular.utils';
import { uuid } from '../../utils/uuid.utils';

@Component({
  selector: 'app-test-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;

  // tslint:disable-next-line: no-output-native
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @ContentChild(FormActionsComponent, { static: true }) formActions: FormActionsComponent;

  id = `form-${uuid()}`;

  get actions() {
    return this.formActions || null;
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (notFirstChange(changes.formActions)) {
      this.addActionListeners();
    }
  }

  ngOnInit() {
    this.addActionListeners();
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      markFormGroupTouched(this.formGroup);
      return;
    }

    this.submit.emit(null);
  }

  onCancel() {
    this.cancel.emit(null);
  }

  private addActionListeners() {
    if (this.actions) {
      this.actions.onCancel = () => this.onCancel();
      this.actions.id = this.id;
      this.actions.changeDetectorRef.detectChanges();
    }
  }
}

export function markFormGroupTouched(formGroup: FormGroup) {
  if (formGroup.controls) {
    const keys = Object.keys(formGroup.controls);
    for (let i = 0; i < keys.length; i++) {
      const control = formGroup.controls[keys[i]];

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormArray) {
        control.markAsTouched({ onlySelf: true });
        control.controls.forEach(markFormGroupTouched);
      } else if (control instanceof FormGroup) {
        markFormGroupTouched(control);
      }
    }
  }
}