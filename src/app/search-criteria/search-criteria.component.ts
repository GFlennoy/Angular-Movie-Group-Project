import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MovieService } from "../movie.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  popMovies: any;
  constructor(
    private service: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getPopularMovies().subscribe(response => {
      console.log(response["results"]);
      this.popMovies = response["results"];
    });
  }
  searchMoviesBy(form: NgForm) {
    console.log(form);
  }
}
