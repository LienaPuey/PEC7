import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  // { path: '', component: ArticleListComponent},
  // { path: 'articles/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard]},
  // { path: 'articles/:id', component: ArticleDetailComponent },
  // { path: 'user', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule) },
  // { path: 'article', loadChildren: () => import('./modules/article/article.module').then((m)=> m.ArticleModule) }
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
  { path: '**', redirectTo: 'user/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
