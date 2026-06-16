import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../movies-service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getMovies();
  }
}