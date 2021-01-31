import { SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';

export function notFirstChange(change?: SimpleChange) {
  return !!change && change.previousValue !== change.currentValue && !change.firstChange;
}

export function unsubscribe(subscription: Subscription | Array<Subscription | any> | any) {
  if (Array.isArray(subscription)) {
    subscription.forEach(unsubscribe);
    return [];
  }
  if (subscription instanceof Subscription) {
    subscription.unsubscribe();
  }
}

