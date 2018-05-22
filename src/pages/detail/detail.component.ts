import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NavController, NavParams } from 'ionic-angular';
import { extend } from "../../services/utility";
import { EditComponent } from '../edit';

@Component({
    // styleUrls: ['pages/detail/detail.component.scss'],
    selector: 'contact-detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
    // private todo : FormGroup;
    private contact: any = {};
    constructor(
        public navCtrl: NavController,
        private navParams : NavParams,
        private _contactSvc: ContactService) {
    }
    public goBackToPrevious(): void {
        // this._location.back();
    }

    public goToEdit(): void {
        this.navCtrl.push(EditComponent, {
            contact: this.contact,
            editMode: true
        });
        // this._router.navigateByUrl("/edit/" + this.contact.id);
    }
    public collectTheContact(): void {
        this._contactSvc.setFavorite(this.contact.id).subscribe((data) => {
            this.contact.if_like = data.if_like;
        });
    }
    
    ngOnInit() {
        // this.todo = this.formBuilder.group({
        //     mobile_number: ['', Validators.required],
        //     email: [''],
        //     birthday: [''],
        //     address: ['']
        // });
        extend(this.contact, this.navParams.get("contact"));
        // delete this.contact.a;
        // let contactId = this._activatedRoute.snapshot.params["id"];
        if(!this.contact || !this.contact.id) {
            alert("缺少参数，跳转到首页");
            return;
        }
        let contactId = this.contact.id;
        this._contactSvc.getContactWithLikes(contactId).subscribe((data) => {
            if(data.length == 1) {
                // 如果取到了数值
                this.contact = extend(data[0]);
            }
        });
    }

    ngOnDestroy() {

    }

}
