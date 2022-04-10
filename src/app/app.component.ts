import { Component } from '@angular/core';
import { ContentChangerService } from './content-changer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DietApp';
  constructor(public contentChanger:ContentChangerService){
  }
}
