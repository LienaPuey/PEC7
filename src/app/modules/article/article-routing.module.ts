import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from 'src/app/article-list/article-list.component';
import { ArticleNewReactiveComponent } from 'src/app/article-new-reactive/article-new-reactive.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ArticleDetailComponent } from 'src/app/article-detail/article-detail.component';

const routes: Routes = [
  { path: 'list', component : ArticleListComponent},
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard]},
  { path: 'articles/:id', component: ArticleDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }