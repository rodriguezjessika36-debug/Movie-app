import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: Movie[] = [
    { id: '1', title: 'Inception', director: 'Christopher Nolan', genre: 'Ciencia ficción' },
    { id: '2', title: 'Parásitos', director: 'Bong Joon-ho', genre: 'Thriller' },
    { id: '3', title: 'Coco', director: 'Lee Unkrich', genre: 'Animación' },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}