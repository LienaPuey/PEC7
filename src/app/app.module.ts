import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleServiceService } from './services/article-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ImageUrlDefaultPipe } from './pipes/image-url-default.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleAppInterceptor } from './article-app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    CurrencyFormatPipe,
    ImageUrlDefaultPipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ArticleServiceService,
    UserService,
    UserStoreService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass : ArticleAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
