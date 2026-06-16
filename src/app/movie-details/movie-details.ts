import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies-service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    this.movie = this.moviesService.getMovies().find((m) => m.id === movieId);
  }

  volverAlListado(): void {
    this.router.navigate(['/movies']);
  }
}