import {Component, OnInit, Input} from '@angular/core';

@Component({
  // styleUrls: ['app/modules/header/header.component.scss'],
  selector: 'contact-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

    @Input() actionTitle: string;
    @Input() headTitle: string;
    @Input() isShowCreateButton: boolean = false;
    constructor() {
        
    }
    ngOnInit() {
        
    }

}
