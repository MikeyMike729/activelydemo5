import {Component, Pipe} from 'angular2/core';

@Pipe({
    name: 'shuffle'
})
class ShufflePipe {
  transform(array: Array<string>, args) {
    return 0.5 - Math.random();
  }
}

@Pipe({
  name: "orderby"
})
export class OrderByPipe {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      // if (a < b) {
      //   return -1;
      // } else if (a > b) {
      //   return 1;
      // } else {
      //   return 0;
      // }
      return 0.5 - Math.random();
    });
    return array;
  }
}