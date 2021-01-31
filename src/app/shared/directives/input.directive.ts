import { Directive, Input, Renderer2, OnInit, ElementRef, HostBinding } from '@angular/core';
import * as uuid from 'uuid';

@Directive({
  selector: 'input[appTestInput]',
})
export class InputDirective implements OnInit {

  // placeholder
  @HostBinding('placeholder') @Input() placeholder = '';

  // unique id
  @HostBinding('id') @Input()
  get id() { return this._id || `input-${uuid.v4()}`; }
  set id(value: string) { this._id = value || `input-${uuid.v4()}`; }

  // input type
  @Input()
  get type() { return this._type; }
  set type(value: string) { this._type = value || 'text'; }

  // input value
  get value() { return this.elementRef.nativeElement.value; }
  set value(value: string) { this.elementRef.nativeElement.value = value; }

  private _id: string;
  private _type = 'text';
  private className = 'input';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, this.className);
  } 4
}
