import { Injectable } from "@angular/core";
import { RequestMethod } from "@angular/http";
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Rx';
import { RequestOptsClass, RequestOptsIn} from "../interfaces/request.opts";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
// import { InterceptorService } from 'ng2-interceptors';
// import { WrappedHttp } from "../rebuild/wrapped.http";

@Injectable()
export class XHRService {

    constructor(private _http: HttpClient) { //InterceptorService

    }

    extraDataHandle(response: any) {
        // let res = response.json();
        // debugger;
        return response.data;
    }

    request(url: string, opts?: RequestOptsIn) {
        // 如果没有传入可选项
        if(!opts) {
            opts = new RequestOptsClass();
            opts.method = 'Get';
            // opts.param = {};
            // opts.urlParam = {};
        }

        // 如果传入了参数
        opts.method = opts.method.toUpperCase().substr(0,1) + opts.method.toLowerCase().substr(1);
        // 如果写入的method名字正确
        if(RequestMethod[opts.method] == undefined) {
            console.error("no support for request type '" + opts.method + "'");
            return;
        }
        let options: any = {
            // method: RequestMethod[opts.method],
            // url: url,
            headers: new HttpHeaders().set("Content-Type", "application/json"),
            responseType: 'json',
            // withCredentials: true,
            // body: null,
            // params: null,
            // search: null
        };

        // request body params
        // console.log(opts.param);
        if(RequestMethod[opts.method] == RequestMethod.Post) {
            // console.log(opts.param);
            options.body = JSON.stringify(opts.param);
        }
        // set url param
        if(opts.urlParam) {
            let searchParams = new HttpParams();
            for(let attr in opts.urlParam) {
                searchParams.set(attr, opts.urlParam[attr]);
            }
            options.params = searchParams;
        }
        let httpRequestor = this._http.request(opts.method, url, (options));
        let returnedSub: any = {};

        try {
            alert("url6:" + url);
            
            returnedSub = httpRequestor.toPromise().then((data: any) => {
                alert("succ:" + JSON.stringify(data));
                return this.extraDataHandle(data);
            }, (error) => {
                alert("fail:" + JSON.stringify(error));
            });
            /*
            returnedSub = httpRequestor.map(this.extraDataHandle).catch((error) => {
                // let errMsg = error.message? error.message: error.status? `${error.status} - ${error.statusText}` : `Server error`;
                alert(4 + JSON.stringify(error));
                console.log(JSON.stringify(error));
                return Observable.throw(error); 
                // return error;
            });
            */
        } catch(error) {
            alert(2);
            alert(error);
        }
        return returnedSub;
    }

}
