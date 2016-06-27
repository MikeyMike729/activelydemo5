import {Component} from 'angular2/core';
import {NavController} from 'ionic-angular';
import {ActivitiesPage} from '../../pages/activities/activities';

/*
  Generated class for the MoodsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/moods/moods.html',
})
export class MoodsPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
  
  openActivitiesPage(item) {
    this.nav.push(ActivitiesPage, { item: item });
  }
}
