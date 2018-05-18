import { Component, ViewChild } from '@angular/core';
import { TabsTextContentPage } from "./TabsTextContentPage";
import { ListPage } from "../list/list";
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ContactListComponent } from '../contact';

@Component({
    template: `
        <ion-tabs>
            <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>
            <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>
        </ion-tabs>`
})
export class TabsTextPage {
    tab1: any;
    tab2: any;
    constructor() {
        this.tab1 = ContactListComponent;
        this.tab2 = HelloIonicPage;
    }
}