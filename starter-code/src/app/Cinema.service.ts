import { Injectable } from '@angular/core';
import movieList from '../sample-movies';

@Injectable()
export class CinemaService {
  movies = movieList;

  constructor(){}

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies[id-1];
  }
}
