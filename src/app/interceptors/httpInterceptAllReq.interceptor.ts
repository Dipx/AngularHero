import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptAllHttp implements HttpInterceptor {
    constructor (private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.messageService.add(`HTTP request intercepted from ${req.url} (response type: ${req.responseType.toUpperCase()} | method: ${req.method.toUpperCase()})`);
        return next.handle(req);
    }
}