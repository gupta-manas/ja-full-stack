import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 App!';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
export class Hero{
  id : number;
  name : string;
}

const HEROES: Hero[] = [
  {id:1, name:"Robin"},
  {id:2, name:"Batman"},
  {id:3, name:"Thor"},
  {id:4, name:"Loki"},
  {id:5, name:"Odin"},
  {id:6, name:"Logan"}
];



