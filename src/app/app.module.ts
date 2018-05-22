import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// import declarationList from '../config/declaration.list';
// import providers from "../config/provider.list";
import { HttpModule } from '@angular/http';
// import entryComponents from "../config/entry.component";
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TabsTextPage } from "../pages/tabsControl/TabsTextPage";
import { ContactListComponent } from "../pages/contact";
import { DetailComponent } from "../pages/detail";
import { HeaderComponent } from "../pages/header/header.component";
import { EditComponent } from "../pages/edit";

// provider Area
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { ContactService } from "../services/contact.service";
import { XHRService } from '../services/xhr';
// import {HttpClientModule} from '@angular/common/http';

let oneDeclarationList = [
  MyApp,
  HelloIonicPage,
  ItemDetailsPage,
  TabsTextPage,
  ListPage,
  HeaderComponent,
  ContactListComponent,
  EditComponent,
  DetailComponent
];
let oneEntryComponentList = [
  MyApp,
  HelloIonicPage,
  ItemDetailsPage,
  ContactListComponent,
  EditComponent,
  DetailComponent,
  TabsTextPage,
  HeaderComponent
];
let oneProvideList = [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  ContactService,
  XHRService,
  // AlbumService,
  // CanActivateGuard,
  // DeCanActivateGuard,
  // ServerURLInterceptor,
  // WrappedHttp,
  // Http,
  // {
  //     provide: WrappedHttp,
  //     useFactory: interceptorFactory,
  //     deps: [XHRBackend, RequestOptions, Router]
  // }
  // provideInterceptorService([
  //     ServerURLInterceptor
  // ])
  // providers: [{ provide: APP_BASE_HREF, useValue: "/app" }],
]


@NgModule({
  declarations: oneDeclarationList,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['一月', '二月', '三月', "四月", "五月","六月","七月","八月","九月","十月","十一月",'十二月'],
      monthShortNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      dayNames: ['一', '二', '三', '四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一'],
      dayShortNames: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: oneEntryComponentList,
  providers: oneProvideList
})
export class AppModule {}
