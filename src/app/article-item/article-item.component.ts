import { Component, EventEmitter, Input, Output,  ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../article';
import { ArticleQuantityChange } from '../article';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() changeQuantity = new EventEmitter<ArticleQuantityChange>();

  increment():void{
    this.changeQuantity.emit({ article : this.article, quantity : this.article.quantityInCart + 1});
  }

  decrement():void {
    this.changeQuantity.emit({ article: this.article, quantity : this.article.quantityInCart -1 });
  }
}
