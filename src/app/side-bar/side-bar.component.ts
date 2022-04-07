import { Component, OnInit } from '@angular/core';
import { ContentChangerService } from '../content-changer.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  handleClick(event: Event, value: String) { 
    console.log('Click!', value) 
    if (value == 'foodlist'){
      //show foodlist
    }
    else if (value == 'today') {
      //show today
    }
    else {
      //show chart
    }
  }   
  constructor() { }

  ngOnInit(): void {
  }

}
