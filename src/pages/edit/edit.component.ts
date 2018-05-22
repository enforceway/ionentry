import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";
import { NavParams, NavController } from 'ionic-angular';
import { extend } from '../../services/utility';
import { DatePipe } from '@angular/common';

@Component({
//   styleUrls: ['app/modules/edit/edit.component.css'],
    selector: 'contact-list',
    templateUrl: 'edit.component.html'
})
export class EditComponent implements OnInit {
    // private todo : FormGroup;
    private contact: any = {};
    private ifEditMode: boolean = false;
    constructor(private _contactSvc: ContactService,
                private navParams : NavParams,
                public navCtrl: NavController) {
    }
    public isModified(): boolean {
        console.log('is modiefied is called');
        return true;
    }

    public doSave() {
        this._contactSvc.updateContact(this.contact).subscribe(() => {
            this.navCtrl.pop();
        });
    }
    public doAdd() {
        this._contactSvc.addContact(this.contact).subscribe(() => {
            this.navCtrl.pop();
        });
    }
    ngOnInit() {
        // this.todo = this.formBuilder.group({
        //     mobile_number: ['', Validators.required],
        //     email: [''],
        //     birthday: [''],
        //     address: [''],
        //     description: ['']
        // });
        let contact = this.navParams.get("contact");
        if(!contact) {
            this.ifEditMode = false;
            return;
        }

        extend(this.contact, contact);
        this.ifEditMode = true;
        this._contactSvc.getContact(this.contact.id).subscribe((data) => {
            if(data) {
                // 如果取到了数值
                this.contact = data;
                if(this.contact.birthday) {
                    let orib = new DatePipe('zh-CN').transform(this.contact.birthday, "yyyy-MM-dd");
                    this.contact.fBirthday = orib;
                }
            }
        });
    }
    public submitForm(): void {
      alert(1231);
    }
    public cancel(): void {
        this.navCtrl.pop();
        // this._location.back();
    }
    
}