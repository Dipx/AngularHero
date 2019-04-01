// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

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
import { LoggingInterceptor } from './http-interceptor/logging-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    LinksComponent,
    LinkNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  providers: [
    LoggingInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
