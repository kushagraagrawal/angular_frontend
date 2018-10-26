import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/movie';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movie: IMovie;
  public movie1 = {
    "id": "200",
    "movieName": "harrypotter",
    "movieRating": 5,
    "movieReview": "saidfjsapfgas"
  }
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
  }
  //movie.id;

  onClick(){
    this._dataservice.postMovies(this.movie1)
        .subscribe();
  }
  deleteClick(id: string){
    this._dataservice.deleteMovie(id).subscribe();
  }

}
