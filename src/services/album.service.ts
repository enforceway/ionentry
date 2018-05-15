import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { XHRService } from "./xhr";
import { apiPath } from "../config/constants";
import { RequestOptsClass, RequestOptsIn } from "../interfaces/request.opts";

@Injectable()
export class AlbumService {

    constructor(private xhrSvc: XHRService) {

    }

    getAllContacts() {
        return this.xhrSvc.request(`${apiPath}/getContactList`);
        // .assign({
        //     method: 'get'
        // }));
    }

    getContact(contactId: any) {
        let param: RequestOptsIn = {method: "Get", urlParam: {id: contactId}};
        return this.xhrSvc.request(`${apiPath}/getContactById`, param);
    }

    getContactWithLikes(contactId?: any) {
        let param: RequestOptsIn = {method: "Get", urlParam: {id: contactId}};
        if(!contactId) {
            delete param.urlParam.id;
        }
        return this.xhrSvc.request(`${apiPath}/getContactWithLikes`, param);
    }

    getFavoriteContacts() {
        return this.xhrSvc.request(`${apiPath}/getFavoriteContacts`);
    }


    updateContact(contactObj: any) {
        let param: RequestOptsIn = {method: "Post", param: contactObj};
        return this.xhrSvc.request(`${apiPath}/updateContact`, param);
    }

    addContact(contactObj: any) {
        let param: RequestOptsIn = {method: "Post", param: contactObj};
        return this.xhrSvc.request(`${apiPath}/addContact`, param);
    }

    setFavorite(contactId: any) {
        let param: RequestOptsIn = {method: "Post", param: {contactId: contactId}};
        return this.xhrSvc.request(`${apiPath}/setFavorite`, param);
    }

}
