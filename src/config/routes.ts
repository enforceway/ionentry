import { ContactListComponent } from "../pages/contact";
import { RaceComponent } from "../pages/race";
import { FavoriteListComponent } from "../pages/favorites";
import { DetailComponent } from "../pages/detail";
import { NotFoundComponent } from "../pages/notfound";
import { AlbumComponent } from "../pages/album";
import { AnnotationComponent } from "../pages/annotation";
import { EditComponent } from "../pages/edit/edit.component";
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from "../interceptor/loginCan";
import { DeCanActivateGuard } from "../interceptor/loginDeCan";
import { LoginComponent } from "../pages/login/login.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: ContactListComponent},
    { path: 'race', component: RaceComponent},
    { path: 'favorites', component: FavoriteListComponent },
    { path: 'notfound', component: NotFoundComponent },
  {
      path: 'detail/:id',
      component: DetailComponent,
      children: [{
          path: '',
          component: AnnotationComponent
      }, {
          path: 'album',
          component: AlbumComponent
      }, {
          path: 'annotation',
          component: AnnotationComponent,
          outlet: "aux"
      }, {
        path: 'album',
        component: AlbumComponent,
        outlet: "aux"
      }]
  },
  {
      path: 'edit/:id',
      component: EditComponent,
      canActivate: [CanActivateGuard],
      canDeactivate: [DeCanActivateGuard]
  },
  { path: 'create', component: EditComponent },
  { path: '**', component: NotFoundComponent },
  {
    path: "",
    redirectTo: "notfound",
    pathMatch: "full"
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
export default appRoutes;