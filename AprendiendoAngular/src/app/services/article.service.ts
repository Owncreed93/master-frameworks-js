import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService{

    public url: string = Global.url;
    public article: Article;
    constructor(
        private _http: HttpClient
    ){

    }

    pruebas(): string{
        return 'Soy el servicio de artículos';
    }

    getArticles(last: any = null): Observable<any>{
        let articles: string = 'articles';

        if ( last != null ){
            articles = 'articles/true';
        }

        return this._http.get(`${this.url}${articles}`);

    }

    getArticle(articleId): Observable<any>{
        return this._http.get(`${this.url}article/${articleId}`);
    }

}
