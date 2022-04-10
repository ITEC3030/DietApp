import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentChangerService {
  foodlist:String = 'flex';
  piechart:String = 'none';
  todaylist:String = 'none';
  changeContent = (value: String ) => {
    this.hideCurrent();
    if (value == 'foodlist')
      this.foodlist = 'flex';
    else if (value == 'todaylist')
      this.todaylist = 'flex';
    else
      this.piechart = 'flex';
  }

  hideCurrent = () => {
    this.foodlist = 'none';
    this.piechart = 'none';
    this.todaylist = 'none';
  }
  constructor() { }
}
