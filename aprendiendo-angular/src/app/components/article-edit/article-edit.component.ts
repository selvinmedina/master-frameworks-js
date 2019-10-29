import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: global.url + 'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed!'
    }
  };
  public isEdit: boolean;
  public page_title: string;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.isEdit = true;
    this.page_title = 'Editar articulo';
    this.url = global.url;
  }
  ngOnInit() {
    this.getArticule();
  }

  onSubmit() {
    let id =
      this._articleService.update(this.article._id, this.article).subscribe(
        response => {
          this.status = 'success'
          if (response.status == 'success') {
            this.status = 'success';
            this.article = response.article;
            this._router.navigate(['/blog/articulo', this.article._id]);
          } else {
            this.status = 'error';
          }
        },
        err => {
          console.log(err);
          this.status = 'error';
        }
      )
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }

  getArticule() {
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

}
