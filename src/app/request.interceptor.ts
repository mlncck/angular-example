import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Custom: 'test'
      }
    });
    return next.handle(request);
  }
}
