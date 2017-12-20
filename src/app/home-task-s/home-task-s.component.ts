import { Component, OnInit } from '@angular/core';
import {Hometask, HometaskService} from '../shared/hometask.service';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';



@Component({
  selector: 'app-home-task-s',
  templateUrl: './home-task-s.component.html',
  styleUrls: ['./home-task-s.component.css']
})
export class HomeTaskSComponent implements OnInit {

  dataSource:Observable<any>
  hometasks:Array<any>;

  /*private hometasks : Hometask[];*/

  /*constructor(private hometaskService:HometaskService) { }*/
  constructor(private http:Http){
    this.dataSource = this.http.get('http://192.168.1.104:8080/users')
      .map((res) => res.json());
  }

  ngOnInit() {
    /*this.hometasks = this.hometaskService.getHometask();*/
    this.dataSource.subscribe(
      (data) => this.hometasks = data
    );
  }

}
