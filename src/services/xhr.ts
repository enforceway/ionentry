import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response, ResponseContentType, RequestMethod, URLSearchParams } from "@angular/http";
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { RequestOptsClass, RequestOptsIn} from "../interfaces/request.opts";
// import { InterceptorService } from 'ng2-interceptors';
// import { WrappedHttp } from "../rebuild/wrapped.http";
@Injectable()
export class XHRService {

    constructor(private _http: Http) { //InterceptorService

    }

    extraDataHandle(response: Response) {
        alert(JSON.stringify(response));
        let res = response.json();
        alert(JSON.stringify(res));
        return res.data;
    }

    request(url: string, opts?: RequestOptsIn) {
        // 如果没有传入可选项
        if(!opts) {
            opts = new RequestOptsClass();
            opts.method = 'Get';
            opts.param = {};
            opts.urlParam = {};
        }

        // 如果传入了参数
        opts.method = opts.method.toUpperCase().substr(0,1) + opts.method.toLowerCase().substr(1);
        // 如果写入的method名字正确
        if(RequestMethod[opts.method] == undefined) {
            console.error("no support for request type '" + opts.method + "'");
            return;
        }
        
        let options: any = {
            method: RequestMethod[opts.method],
            url: url,
            headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }),
            responseType: ResponseContentType.Json,
            // withCredentials: true,
            body: null,
            search: null
        };

        // request body params
        // console.log(opts.param);
        if(RequestMethod[opts.method] == RequestMethod.Post) {
            // console.log(opts.param);
            options.body = JSON.stringify(opts.param);
        }

        // set url param
        let searchParams = new URLSearchParams();
        if(opts.urlParam) {
            for(let attr in opts.urlParam) {
                searchParams.set(attr, opts.urlParam[attr]);
            }
        }
        options.search = searchParams;
        alert(url);
        let httpRequestor = this._http.request(url, new RequestOptions(options));
        return httpRequestor.map(this.extraDataHandle).catch((error) => {
            // let errMsg = error.message? error.message: error.status? `${error.status} - ${error.statusText}` : `Server error`;
            alert(JSON.stringify(error));
            return Observable.throw(error); 
            // return error;
        });
    }

}
