import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer-list.model';

@Pipe({
  name: "content",
  pure: false
})


export class HighContentPipe implements PipeTransform {
  transform(input: Beer[], desiredContent) {
      var output: Beer[] = [];
      if(desiredContent === "lowContentBeers") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].percent < 7) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredContent === "highContentBeers") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].percent >= 7) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }


}
