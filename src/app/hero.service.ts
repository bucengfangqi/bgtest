import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero;
  getHeroes(){
    return 15088672074;
  }
  initialize(){
    this.hero=undefined;
  }
  constructor() { }
}
