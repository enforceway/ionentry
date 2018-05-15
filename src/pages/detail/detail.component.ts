import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ContactService } from '../../services/contact.service';

@Component({
    // styleUrls: ['app/modules/detail/detail.component.css'],
    selector: 'contact-detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
    private contact: any;
    public goBackToPrevious(): void {
        this._location.back();
    }

    public goToEdit(): void {
        this._router.navigateByUrl("/edit/" + this.contact.id);
    }
    public collectTheContact(): void {
        this._contactSvc.setFavorite(this.contact.id).subscribe((data) => {
            this.contact.if_like = data.if_like;
        });
    }
    constructor(private _location: Location,
                private _activatedRoute : ActivatedRoute, 
                private _router: Router,
                private _contactSvc: ContactService) {
    }
    ngOnInit() {
        this.contact = {};
        let contactId = this._activatedRoute.snapshot.params["id"];
        if(!contactId) {
            alert("缺少参数，跳转到首页");
            return;
        }
        this._contactSvc.getContactWithLikes(contactId).subscribe((data) => {
            if(data.length == 1) {
                // 如果取到了数值
                this.contact = data[0];
            }
        });
    }

    ngOnDestroy() {

    }

}
