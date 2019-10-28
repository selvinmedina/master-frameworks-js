import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  public article: Article;

  constructor() {
    this.article = new Article('','','',null,null);
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.article);
  }

}
