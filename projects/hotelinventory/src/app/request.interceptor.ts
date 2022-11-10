import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.warn("reuqest interceptor is calling!")
    console.log('%creuqest interceptor is calling!', 'color: green; background: yellow; font-size: 15px');
    // we can use intecepts as per our condition like if request.method == "post" etc..
    const newRequest = request.clone({
      headers: new HttpHeaders({ adminToken: 'changed34325Token'}),
    });
    return next.handle(newRequest);
  }
}
