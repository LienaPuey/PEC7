import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'articles/list', component: ArticleListComponent},
  { path: 'articles/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard]},
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
