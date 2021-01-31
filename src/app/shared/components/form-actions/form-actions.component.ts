import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-test-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormActionsComponent implements OnInit, OnDestroy {

  @Input() actionLabel = 'save';
  @Input() actionVisible = true;
  @Input() cancelLabel = 'cancel';
  @Input() cancelVisible = true;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  id: string;

  constructor(
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onSave = () => { };
    this.onCancel = () => { };
  }

  onSave = () => { };
  onCancel = () => { };
}
