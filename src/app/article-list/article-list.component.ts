import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleQuantityChange } from '../article';
import { ArticleServiceService } from '../services/article-service.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
    <div class="row d-flex my-3">
    <form class="d-flex">
        <div class="col-8 me-2">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" (input)="search($event)">
        </div>
        <div class="col-4">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
    </form>
</div>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <ng-container *ngFor="let article of articles$ | async">
            <app-article-item [article]="article" (changeQuantity)="onQuantityChange($event)"></app-article-item>
          </ng-container>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        <div *ngFor="let article of articles | async" >
          <app-article-item [article]="article" (changeQuantity)="onQuantityChange($event)"></app-article-item>
        </div>
      </div>
    </div>
  </div>  
`,
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{

  public articles: Observable<Article[]> | undefined;
  searchTerm$ = new Subject<string>();
  articles$!: Observable<Article[]>;

  constructor(private articleService : ArticleServiceService){
    this.articles$= this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term:string)=> this.articleService.searchArticle(term))
    )
  }
  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  onQuantityChange(event: ArticleQuantityChange ):void{
    const {article, quantity} = event;

    this.articleService.getArticles().subscribe(articles => {
      const foundArticle = articles.find(a => a.id === article.id);
        if(foundArticle){
          foundArticle.quantityInCart = quantity;
        }
    })
  }

  search(event:Event):void{
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

}
