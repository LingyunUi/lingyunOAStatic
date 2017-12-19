import { Component, OnInit } from '@angular/core';

import * as moment from '../../libs/moment';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const formatDate = moment().format('YYYY年MM月DD日');
    console.log(formatDate);
  }

}
