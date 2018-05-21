/**
 * core
*/
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    // styleUrls: ['app/modules/contact/contact.item.css'],
    selector: 'contact-item',
    templateUrl: 'contact.item.html'
})
export class ContactItemComponent implements OnInit {
    @Input() contact: any = {};
    // public goToDetail(): void {
    //     this._router.navigateByUrl("/detail/" + this.contact.id);
    // }
    constructor() {
    }
    ngOnInit() {
        console.log("initializing contact.item");
    }
    public goToDetail(): void {
        // this._router.navigate(['/detail', this.contact.id, {
        //     outlets: {
        //         primary: ['album'],
        //         aux: ['album']
        //     }
        // }]);

        // this._router.navigate(['/detail', this.contact.id, {
        //     before: '2011-01-01', 
        //     after: '2011-02-02'
        // }, 'album', {
        //     before: '2017-01-01',
        //     after: '2017-01-01'
        // }]);
    }
}
