// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { InMemoryDataService }  from './services/in-memory-data.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LinksComponent } from './links/links.component';
import { LinkNewComponent } from './link-new/link-new.component';
import { LinkUpdateComponent } from './link-update/link-update.component';
import { LoggingInterceptor } from './http-interceptor/logging-interceptor';
import { ObservablesComponent } from './observables/observables.component';
import { CryptoObservableComponent } from './observables/crypto-observable/crypto-observable.component';
import { ProductDetailComponent } from './observables/product-detail/product-detail.component';
import { UnsavedChangesGuard } from './guards/UnsavedChangesGuard.guard';
import { NewsResolver } from './resolvers/news.resolver';
import { InterceptAllHttp } from './interceptors/httpInterceptAllReq.interceptor';
import { ShowNewsComponent } from './observables/show-news/show-news.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    LinksComponent,
    LinkNewComponent,
    ObservablesComponent,
    LinkUpdateComponent,
    CryptoObservableComponent,
    ProductDetailComponent,
    ShowNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  providers: [
    LoggingInterceptor,
    UnsavedChangesGuard,
    NewsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptAllHttp, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
