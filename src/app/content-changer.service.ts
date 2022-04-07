import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentChangerService {
  content:String = 'foodlist'
  constructor() { }
}
