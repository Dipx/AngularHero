import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LinksComponent } from './links/links.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "links", component: LinksComponent},
  {path: "testObservable", component: ObservablesComponent},
  {path: "details/hero/:id", component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
