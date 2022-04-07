import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  //formatDate(new Date(), 'yyyy/MM/dd', 'en');
  date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  constructor() { 
    
  }
  ngOnInit(): void {
  }

}
