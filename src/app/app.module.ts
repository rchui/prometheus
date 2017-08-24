import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

import { TermsService } from './services/terms.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      }, {
        path: 'search',
        component: SearchComponent
      }, {
        path: 'list',
        component: ListComponent
      }
    ])
  ],
  providers: [
    TermsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
