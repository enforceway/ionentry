import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ContactService } from "../../services/contact.service";

@Component({
//   styleUrls: ['app/modules/edit/edit.component.css'],
  selector: 'contact-list',
  templateUrl: 'edit.component.html'
})
export class EditComponent implements OnInit {
    private contact: any;
    private ifEditMode: boolean;
    constructor(private _location: Location,
                private _activatedRoute : ActivatedRoute, 
                private _router: Router,
                private _contactSvc: ContactService) {
    }
    public isModified(): boolean {
        console.log('is modiefied is called');
        return true;
    }

    public doSave() {
        this._contactSvc.updateContact(this.contact).subscribe(() => {
            this._location.back();
        });
    }
    public doAdd() {
        this._contactSvc.addContact(this.contact).subscribe(() => {
            this._location.back();
        });
    }
    ngOnInit() {
        this.contact = {};
        let contactId = this._activatedRoute.snapshot.params["id"];
        if(contactId != null && contactId != undefined) {
            this.ifEditMode = true;
        } else {
            this.ifEditMode = false;
        }
        if(this.ifEditMode == true) {
            this._contactSvc.getContact(contactId).subscribe((data) => {
                if(data) {
                    // 如果取到了数值
                    this.contact = data;
                }
            });
        }
    }
    public submitForm(): void {
      alert(1231);
    }
    public cancel(): void {
        this._location.back();
    }
    
}