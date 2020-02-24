import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  apiKey: string = "f0cd2889cde42e27b8c5aff4688f7b9b";
  favorites: any[] = [];
  dataGenres = [];
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?", {
      params: { api_key: this.apiKey }
    });
  }
  getGenres() {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?", {
      params: { api_key: this.apiKey }
    });
  }
  addToFavs(favorite: any) {
    this.favorites.push(favorite);
  }
  getFavs() {
    return this.favorites;
  }
  getData(queryParams: any) {
    let parameters: any = {
      api_key: this.apiKey
    };
    if (queryParams.year) {
      parameters.year = queryParams.year;
    }
    if (queryParams.rating) {
      parameters.vote_average = queryParams.rating;
    }
    return this.http.get("https://api.themoviedb.org/3/discover/movie?", {
      params: parameters
    });
  }
}
