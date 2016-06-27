import {Component} from 'angular2/core';
import {Modal, NavController, NavParams} from 'ionic-angular'
import {ActivityDetailsPage} from '../../pages/activity-details/activity-details'
import {OrderByPipe} from '../../shuffle'

/*
  Generated class for the ActivitiesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/activities/activities.html',
  pipes: [OrderByPipe],
})

export class ActivitiesPage {
  
  activities = [
      {
        id: 1,
        image: 'img/albertaaviationmuseum1.jpg',
        title: 'Alberta Aviation Museum'
      },
      {
        id: 2,
        image: 'img/albertalegislature1.jpg',
        title: 'Alberta Legislature'
      },
      {
        id: 3,
        image: 'img/artgalleryofalberta2.jpg',
        title: 'Art Gallery of Alberta'
      },
      {
        id: 4,
        image: 'img/castrolraceway1.jpg',
        title: 'Castrol Raceway'
      },
      {
        id: 5,
        image: 'img/churchillsquare1.jpg',
        title: 'Churchill Square'
      },
      {
        id: 6,
        image: 'img/cityhall1.jpg',
        title: 'City Hall'
      },
      {
        id: 7,
        image: 'img/citymarketdowntown1.jpg',
        title: 'City Market Downtown'
      },
      {
        id: 8,
        image: 'img/devonianbotanicgardens1.jpg',
        title: 'Devonian Botanic Gardens'
      },
      {
        id: 9,
        image: 'img/dinnertheatres1.jpg',
        title: 'Dinner Theatres'
      },
      {
        id: 10,
        image: 'img/edmontoneskimos1.jpg',
        title: 'Edmonton Eskimos'
      },
      {
        id: 11,
        image: 'img/edmontonicecastle1.jpg',
        title: 'Edmonton Ice Castle'
      },
      {
        id: 12,
        image: 'img/edmontonoilers1.jpg',
        title: 'Edmonton Oilers'
      },
      {
        id: 13,
        image: 'img/edmontonprospects1.jpg',
        title: 'Edmonton Prospects'
      },
      {
        id: 14,
        image: 'img/edmontonvalleyzoo1.jpg',
        title: 'Edmonton Valley Zoo'
      },
      {
        id: 15,
        image: 'img/elkisland1.jpg',
        title: 'Elk Island'
      },
      {
        id: 16,
        image: 'img/fortedmontonpark1.jpg',
        title: 'Fort Edmonton Park'
      },
      {
        id: 17,
        image: 'img/galaxyland1.jpg',
        title: 'Galaxy Land'
      },
      {
        id: 18,
        image: 'img/golfedmonton.jpg',
        title: 'Golf'
      },
      {
        id: 19,
        image: 'img/hawrelakpark1.jpg',
        title: 'Hawrelak Park'
      },
      {
        id: 20,
        image: 'img/highlevelbridgestreetcar1.jpg',
        title: 'High Level Bridge Street Car'
      },
      {
        id: 21,
        image: 'img/johnjanzen1.jpg',
        title: 'John Janzen Nature Center'
      },
      {
        id: 22,
        image: 'img/johnwaltermuseum1.jpg',
        title: 'John Walter Museum'
      },
      {
        id:23,
        image: 'img/jubileeauditorium1.jpg',
        title: 'Jubilee Auditorium'
      },
      {
        id: 24,
        image: 'img/jurassicforest1.jpg',
        title: 'Jurassic Forest'
      },
      {
        id: 25,
        image: 'img/leducone1.jpg',
        title: 'Leduc #1'
      },
      {
        id: 26,
        image: 'img/muttart1.jpg',
        title: 'Muttart Conservatory'
      },
      {
        id: 27,
        image: 'img/northernlights1.jpg',
        title: 'Northern Lights'
      },
      {
        id: 28,
        image: 'img/northlands1.jpg',
        title: 'Northlands'
      },
      {
        id: 29,
        image: 'img/oldstratheconafarmersmarket1.jpg',
        title: 'Old Strathecona Farmers Market'
      },
      {
        id: 30,
        image: 'img/rabbithill1.jpg',
        title: 'Rabbit Hill'
      },
      {
        id: 31,
        image: 'img/rivervalley1.jpg',
        title: 'River Valley'
      },
      {
        id: 32,
        image: 'img/rutherfordhouse1.jpg',
        title: 'Rutherford House'
      },
      {
        id: 33,
        image: 'img/skating1.jpg',
        title: 'Skating'
      },
      {
        id: 34,
        image: 'img/symphonyorchestra1.jpg',
        title: 'Symphony Orchestra'
      },
      {
        id: 35,
        image: 'img/thecapitoltheatre1.jpg',
        title: 'The Capitol Theatre'
      },
      {
        id: 36,
        image: 'img/ukrainianculturalheritagevillage1.jpg',
        title: 'Ukrainian Cultural Heritage Village'
      },
      {
        id: 37,
        image: 'img/westedmall1.jpg',
        title: 'West Edmonton Mall'
      },
      {
        id: 38,
        image: 'img/whyteavenue1.jpg',
        title: 'Whyte Avenue'
      },
      {
        id: 39,
        image: 'img/worldofscience1.jpg',
        title: 'World of Science'
      },
      {
        id: 40,
        image: 'img/worldwaterpark1.jpg',
        title: 'World Water Park'
      }
    ]


    constructor(
      public nav: NavController
      ) 
    {
    }

    openModal(activityNum) {
    let modal = Modal.create(ActivityDetailsPage, activityNum);
    this.nav.present(modal);
  }


}



