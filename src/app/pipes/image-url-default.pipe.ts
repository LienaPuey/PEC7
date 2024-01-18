import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrlDefault'
})
export class ImageUrlDefaultPipe implements PipeTransform {

  transform(imageUrl: string): string {
    return imageUrl || '../assets/images/default.jpg';
  }

}
