import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { WatchlistPageComponent } from "./watchlist-page/watchlist-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/search-criteria", pathMatch: "full" },
  { path: "**", redirectTo: "/search-criteria", pathMatch: "full" },
  {
    path: "search-criteria",
    component: SearchCriteriaComponent,
    pathMatch: "full"
  },
  { path: "movie-list", component: MovieListComponent, pathMatch: "full" },
  {
    path: "watchlist-page",
    component: WatchlistPageComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
