import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  apiKey: string = "f0cd2889cde42e27b8c5aff4688f7b9b";
  favorites: any[] = [];
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?", {
      params: { api_key: this.apiKey }
    });
  }
  addToFavs(favorite: any) {
    this.favorites.push(favorite);
  }
  getFavs() {
    return this.favorites;
  }
  getData() {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?", {
      params: { api_key: this.apiKey }
    });
  }
}
