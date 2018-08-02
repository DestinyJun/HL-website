import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', loadChildren: 'app/business/main/main.module#MainModule'},
      {path: 'list', loadChildren: 'app/business/list/list.module#ListModule'},
      {path: 'case', loadChildren: 'app/business/case/case.module#CaseModule'},
      {path: 'contact', loadChildren: 'app/business/contact/contact.module#ContactModule'},
      {path: 'about', loadChildren: 'app/business/about/about.module#AboutModule'},
      {path: 'details', loadChildren: 'app/business/details/details.module#DetailsModule'},
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
