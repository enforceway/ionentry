/**
 * core
*/
import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
import { ContactService } from "../../services/contact.service";
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
// import contacts from "../../data/contacts";

@Component({
  // styleUrls: ['app/modules/contact/contacts.component.css'],
  selector: 'contact-list',
  templateUrl: 'contacts.component.html'
})
export class ContactListComponent implements OnInit {
  private contacts: Array<Object>;
  constructor(public navCtrl: NavController, private _contactSvc: ContactService) {
    // console.log("homeom");
    //this._router.navigate(["/"]);
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  ngOnInit() {
    this._contactSvc.getAllContacts().subscribe((allContacts) => {
        this.contacts = allContacts;
    });
    // .subscribe((data: any) => {
    //   console.log(data);
    // });
    // let allLocalContacts: string = localStorage.getItem(favoriteStorageName);
    // if(!allLocalContacts) {
    //     this.contacts = contacts;
    // }
    // console.log(this._contacts);

  }
}
