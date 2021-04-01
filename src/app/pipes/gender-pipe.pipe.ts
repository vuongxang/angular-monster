import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(value: Number): unknown {
    switch (value) {
      case 1:
        return "Nam";
        break;
      case 2:
        return "Nữ";
        break;
      default:
        return "Khác";
        break;
    }
  }

}
