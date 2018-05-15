import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ContactService } from '../../services/contact.service';

@Component({
    // styleUrls: ['app/modules/album/album.component.css'],
    selector: 'detail-album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit, OnDestroy {
    private contact: any;

    constructor(private _location: Location,
                private _activatedRoute : ActivatedRoute, 
                private _router: Router,
                private _contactSvc: ContactService) {
    }
    ngOnInit() {
        
    }

    ngOnDestroy() {

    }

}
