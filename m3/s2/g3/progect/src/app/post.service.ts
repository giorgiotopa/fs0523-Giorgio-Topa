import { Injectable } from '@angular/core';
import { Ipost } from './Models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post:Ipost[]= [
    {
      id: 0,
      title: 'Post',
      author: 'Jonny',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'new',
      active: true
    },
    {
      id: 1,
      title: 'Post',
      author: 'Jenny',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'politic',
      active: true
    },
    {
      id: 2,
      title: 'Post',
      author: 'Jinny',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'education',
      active: true
    },
    {
      id: 3,
      title: 'Post',
      author: 'Janny',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'politic',
      active: true
    },
    {
      id: 4,
      title: 'Post',
      author: 'Pepp',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'education',
      active: true
    },
    {
      id: 5,
      title: 'Post',
      author: 'JenPep',
      description: 'lorem ipsum dolor sit am eiusmod tempor incidid id',
      type: 'new',
      active: true
    },
  ];

  constructor() {}

  getActivePost(){
    return this.post.filter(p => p.active)
  }
  getInactivePost(){
    return this.post.filter(p => !p.active)
  }
}
