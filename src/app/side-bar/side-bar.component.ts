import { Component, OnInit } from '@angular/core';
import { ContentChangerService } from '../content-changer.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  handleClick(event: Event, value: String) { 
    this.contentChanger.changeContent(value);
  } 
  
  constructor(private contentChanger:ContentChangerService) { }

  ngOnInit(): void {
  }

}
