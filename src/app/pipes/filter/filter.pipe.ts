import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';

@Pipe({
  name: 'filter',
  pure: false,
})
// pure pipe does not affect the o/p when data is filetred but if we use impure as making pur to dalsle then we cans see that the data is shown the and there.
export class FilterPipe implements PipeTransform {
  transform(input: IUser[], filterIdType: string): IUser[] {
    // return input.filter(user=> user.id % 2 !== 0);
    if (filterIdType === '') {
      return input;
    } else {
      return filterIdType === 'odd'
        ? input.filter((user) => user.id % 2 !== 0)
        : input.filter((user) => user.id % 2 === 0);
    }
  }
}
