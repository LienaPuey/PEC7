import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ArticleAppInterceptor } from './article-app.interceptor';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    ArticleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass : ArticleAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
