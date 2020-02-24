import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  favorites: any[] = [];
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavs();
  }
}
