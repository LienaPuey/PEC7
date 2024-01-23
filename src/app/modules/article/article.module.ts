import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleDetailComponent } from 'src/app/article-detail/article-detail.component';
import { ArticleItemComponent } from 'src/app/article-item/article-item.component';
import { ArticleListComponent } from 'src/app/article-list/article-list.component';
import { ArticleNewReactiveComponent } from 'src/app/article-new-reactive/article-new-reactive.component';
import { ImageUrlDefaultPipe } from 'src/app/pipes/image-url-default.pipe';
import { CurrencyFormatPipe } from 'src/app/pipes/currency-format.pipe';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { AuthGuard } from 'src/app/guards/auth.guard';



@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ImageUrlDefaultPipe,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ArticleServiceService,
    AuthGuard
  ]
})
export class ArticleModule { }
