import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  @Input() movieList: any;
  constructor(private service: MovieService) {}
  addToFavs(favorite: any) {
    this.service.addToFavs(favorite);
  }

  ngOnInit(): void {
    // console.log(this.movieList);
  }
}
