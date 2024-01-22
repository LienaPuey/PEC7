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
  @Input() public article!: Article;
  @Output() public changeQuantity: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  increment():void{
    this.changeQuantity.emit({ article : this.article, quantity: 1});
  }

  decrement():void {
    if(this.article.quantityInCart > 0){
      this.changeQuantity.emit({ article: this.article, quantity : -1 });
    }
  }
}
