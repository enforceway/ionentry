// import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// import { Observable } from 'rxjs/Observable';
// import { Router } from "@angular/router";

// export class WrappedHttp extends Http {

//     constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
//         super(backend, defaultOptions);
//     }

//     request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.request(url, options));
//     }

//     get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.get(url,options));
//     }

//     post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
//     }

//     put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
//     }

//     delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.delete(url, options));
//     }
    
//     getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
//         if (options == null) {
//             options = new RequestOptions();
//         }
//         if (options.headers == null) {
//             options.headers = new Headers();
//         }
//         options.headers.append('Content-Type', 'application/json');
//         return options;
//     }

//     intercept(observable: Observable<Response>): Observable<Response> {
//         debugger;
//         return observable.catch((err, source) => {
// 			if (err.status  == 401) {
//                 debugger;
//                 this._router.navigate(['/favorites']);
//                 return Observable.empty();
//             } else {
//                 debugger;
//                 return Observable.throw(err);
// 			}
//         });

//     }
// }