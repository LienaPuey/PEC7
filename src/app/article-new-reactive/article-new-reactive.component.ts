import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NameArticleValidator } from '../name-article-validator';
import { ArticleServiceService } from '../services/article-service.service';
import { Article } from '../article';
@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private articleService :ArticleServiceService){
    this.createform();
  }

  createform(){
    this.articleForm = this.fb.group({
      name: ["", [Validators.required, NameArticleValidator.test]],
      price:[0, [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/), Validators.min(0.1)]],
      url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
      sale: [false]
    });
  }

  submitForm(){
    if(this.articleForm.valid){
      let formData = this.articleForm.value;

      const newArticle : Article = {
        id: 0,
        name: formData.name,
        price: formData.price,
        imageUrl: formData.url,
        isOnSale: formData.sale,
        quantityInCart: 0
      };

      this.articleService.create(newArticle).subscribe(response=> {
        console.log("Artículo creado con éxito", response);
        this.articleForm.reset({
          name: '', 
          price: 0, 
          url: '', 
          sale: false 
        });
      })
    }
  }
}
