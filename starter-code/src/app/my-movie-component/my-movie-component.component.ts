import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../Cinema.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie: any;

  constructor(public cinemaService : CinemaService, private route: ActivatedRoute, private router: Router) {
    this.route.params
        .subscribe((params) => this.movie = params['id']);
    }

    ngOnInit() {
      this.movie = this.cinemaService.getMovie(this.movie);
      console.log(this.movie)
    }



  }
