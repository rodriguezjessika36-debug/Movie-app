import { Component, computed, input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies-service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  movieId = input<string>();

  movie = computed(() =>
    this.moviesService.getMovies().find((m) => m.id === this.movieId())
  );

  constructor(
    private router: Router,
    private moviesService: MoviesService
  ) {}

  volverAlListado(): void {
    this.router.navigate(['/movies']);
  }
}