import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../Models/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrl: './attivi.component.scss'
})
export class AttiviComponent implements OnInit{

  post:Ipost[] = [];

  constructor(private postSvc:PostService) {
   }

  ngOnInit(){
    this.post = this.postSvc.getActivePost();
  }
}


