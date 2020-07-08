import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apendor'
})
export class ApendorPipe implements PipeTransform {

  transform(input: string , position:string,textToAppend : string): string {
    return position === 'pre' ? textToAppend + input :input+ textToAppend;
    // let output ='mailto://' + input;  comment: 1.0
    // return output;
  }

}
