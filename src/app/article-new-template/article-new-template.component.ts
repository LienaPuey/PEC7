import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  article:FormGroup;

  constructor(){
    this.article = new FormGroup({
      name: new FormControl ('', Validators.required),
      price: new FormControl ('', [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/)]),
      url: new FormControl ('', [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]),
      sale: new FormControl(false)

    })
  }

  submitForm(){
    if(this.article.valid){
      let formData = this.article.value;
      console.log("Datos del formulario: ", formData);
      this.article.reset();
    }

  }

}
