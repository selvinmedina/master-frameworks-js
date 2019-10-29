import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

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
  public page_title: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = 'Crear articulo'
  }

  ngOnInit() {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        this.status = 'success'
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          // Alertas
          swal(
            'Articulo creado',
            'El articulo se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/blog']);
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

}
