import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import declarationList from '../config/declaration.list';
import providers from "../config/provider.list";
import { TabsTextContentPage } from '../pages/tabsControl/TabsTextContentPage';
import { TabsTextPage } from '../pages/tabsControl/TabsTextPage';
import { ContactListComponent } from '../pages/contact';
import { HeaderComponent } from '../pages/header/header.component';
// import { ContactItemComponent } from '../pages/contact/contact.item';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: declarationList,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ContactListComponent,
    TabsTextPage,
    HeaderComponent,
    // ContactItemComponent
  ],
  providers: providers
})
export class AppModule {}
