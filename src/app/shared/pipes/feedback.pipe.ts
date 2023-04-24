import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedback'
})
export class FeedbackPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let trimmed = value.trim();
    let upper_case = trimmed.slice(0, 1).toUpperCase() + trimmed.slice(1);
    return upper_case;
  }

}
