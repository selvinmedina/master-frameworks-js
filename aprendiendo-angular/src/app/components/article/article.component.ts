import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        err => {
          this._router.navigate(['/home']);
        }
      )
    });
  }

  delete(id) {
    swal({
      title: "Estas seguro?",
      text: "Una ves borrado el articulo no podras recuperarlo",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(id).subscribe(
            response => {
              swal("Articulo eliminado correctamente", {
                icon: "success",
              });
              this._router.navigate(['/blog']);
            },
            error => {
              console.log(error);
              this._router.navigate(['/blog']);
            }
          );
        } else {
          swal("Se ha cancelado la eliminacion.");
        }
      });
  }

}
