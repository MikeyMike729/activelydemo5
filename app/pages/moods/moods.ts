import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the MoodsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: './build/pages/activities/activities.html',
})
class ActivitiesPage {
  item;

  constructor() {
  }
}

@Page({
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
