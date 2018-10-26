import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-readjson',
  templateUrl: './readjson.component.html',
  styleUrls: ['./readjson.component.css']
})
export class ReadjsonComponent implements OnInit {

  public movies = []
  public movie = {
    "id": "200",
    "movieName": "harrypotter",
    "movieRating": 5,
    "movieReview": "saidfjsapfgas"
  }

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.getMovies()
        .subscribe(data => this.movies = data);    
  }
}
