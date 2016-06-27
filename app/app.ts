import {Component} from 'angular2/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MoodsPage} from './pages/moods/moods';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = MoodsPage;

  constructor() {

  }
  
}
