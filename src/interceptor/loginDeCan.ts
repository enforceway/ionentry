import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
// import { XHRService } from "../services/xhr";
// import { Observable } from 'rxjs/Observable';
// import { apiPath } from "../config/constants";
import { EditComponent } from "../pages/edit/edit.component";

@Injectable()
export class DeCanActivateGuard implements CanDeactivate<EditComponent> {

    canDeactivate(
        component: EditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if(component.isModified()) {
            return true;
        } else {
            return false;
        }
    }

}
