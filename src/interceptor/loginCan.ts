import { Injectable, Inject } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { XHRService } from "../services/xhr";
import { Observable } from 'rxjs/Observable';
import { apiPath } from "../config/constants";

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(
        // private permissions: Permissions, 
        // private currentUser: UserToken,
        private _xhrSvc: XHRService
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return new Observable<boolean>((observer: any) => {
            this._xhrSvc.request(`${apiPath}/ifLoginActive`).subscribe((data) => {
                if(data && data.active == true) {
                    observer.next(true);
                } else {
                    observer.next(false);
                }
                observer.complete();
            });
        });
    }
}
