import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  num1:number;
  num2:number;
  num3:number;
  

  heroes = HEROES;

  selectedHero: Hero;

  constructor() {  
   }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  restore(){
   this.num1=0;
    this.num2=0;
  }
  sum()
  {
    this.num1+this.num2;
    
  }
}