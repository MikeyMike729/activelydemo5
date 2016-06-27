import { Component } from 'angular2/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the ActivityDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/activity-details/activity-details.html',
})
export class ActivityDetailsPage {
  activity;
  activitydetails;
  
  constructor(
    private nav: NavController,
    public params: NavParams,
    public platform: Platform,
    public viewCtrl: ViewController
  ) {
    this.activitydetails = [
      {
        description: "Activity Description"
      }
    ]
    this.activity = this.activitydetails[this.params.get('activityNum')];
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}

