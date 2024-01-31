import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../services/article-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit{

  public article : Article | undefined;

  constructor(private articleService: ArticleServiceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId !== null) {
      this.articleService.getArticle(articleId).subscribe(article => this.article = article);
      console.log("Artículo");
    }
  }

}
