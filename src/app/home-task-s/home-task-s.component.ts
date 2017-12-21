import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';



@Component({
  selector: 'app-home-task-s',
  templateUrl: './home-task-s.component.html',
  styleUrls: ['./home-task-s.component.css']
})
export class HomeTaskSComponent implements OnInit {

  hometasks:Observable<any>;

  constructor(private http:Http){
    this.hometasks = this.http.get('/api/hometasks')
      .map((res) => res.json());
  }

  ngOnInit() {

  }

}
