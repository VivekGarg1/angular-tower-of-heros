import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './medel/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
  { id: 1, name: 'Arvind' },
  { id: 2, name: 'Avinash' },
  { id: 3, name: 'Pooja' },
  { id: 4, name: 'Himanshu' },
  { id: 5, name: 'Nidhi' },
  { id: 6, name: 'Anu' },
  { id: 7, name: 'Khusbo' },
  { id: 8, name: 'Rishali' },
  { id: 9, name: 'Madhvesh' },
  { id: 10, name: 'Sarath' }
    ];
    return {heroes};
  }

genId(heroes: Hero[]): number {
  return heroes.length>0?Math.max(...heroes.map(hero => hero.id))+1:1;
}
}