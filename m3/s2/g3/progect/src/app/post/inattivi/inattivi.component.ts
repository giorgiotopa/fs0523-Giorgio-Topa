import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../Models/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrl: './inattivi.component.scss'
})
export class InattiviComponent implements OnInit {

  post:Ipost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.post = this.postSvc.getInactivePost();
  }
}
