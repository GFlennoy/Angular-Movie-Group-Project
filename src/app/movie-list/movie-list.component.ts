import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  toggle: boolean = true;
  status: string = "enable";
  favIds: any[] = [];
  @Input() movieList: any;
  constructor(private service: MovieService) {}
  addToFavs(favorite: any) {
    this.service.addToFavs(favorite);
  }
  toggleFavorite(favorite: any) {
    if (this.favIds.includes(favorite.id)) {
      let index = this.favIds.findIndex(fav => {
        return fav === favorite.id;
      });
      this.favIds.splice(index, 1);
    } else {
      this.favIds.push(favorite.id);
    }
  }
  checkFav(movie: any) {
    return this.favIds.includes(movie.id);
  }
  ngOnInit(): void {
    // console.log(this.movieList);
  }
}
