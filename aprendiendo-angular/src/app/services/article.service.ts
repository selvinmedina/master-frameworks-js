import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { global } from './global';

@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    pruebas() {
        return 'Soy el servicio de articulos'
    }

    getArticles(last: any = null): Observable<any> {
        if (last != null) {
            return this._http.get(this.url + 'articles/true');
        }
        return this._http.get(this.url + 'articles');
    }

    getArticle(artilceId): Observable<any> {
        return this._http.get(this.url + 'article/' + artilceId);
    }

    search(searchString): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString);
    }

}