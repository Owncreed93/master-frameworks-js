import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService, ],
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) { this.title = 'Últimos Artículos'; }

  ngOnInit(): void {

    this._articleService.getArticles().subscribe(
      response => {
        console.log(response);

        this.articles = response.articles;
      },

      fails => {
        console.log(fails);
      }
    );

  }

}
