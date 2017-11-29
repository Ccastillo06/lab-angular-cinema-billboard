import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../Cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieArray : Array<Object>;
  constructor(public cinemaService:CinemaService) { }

  ngOnInit() {
    this.movieArray = this.cinemaService.getMovies();
  }

}
