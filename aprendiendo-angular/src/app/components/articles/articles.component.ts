import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  public url: string;

  constructor() {
    this.url = global.url;
   }

  ngOnInit() {
  }

}
