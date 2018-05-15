import { OnInit } from "@angular/core";

export interface RequestOptsIn {
    method: string;
    param?: any;
    urlParam?: any;
}
export class RequestOptsClass implements RequestOptsIn, OnInit {

    method: string;
    param: any;
    urlParam: any;
    constructor() {

    }

    ngOnInit() {
        this.method = 'get';
        this.param = {};
        this.urlParam = {};
    }

}