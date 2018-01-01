import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectsPage} from '../projects/projects';
import {SchoolservicePage} from '../schoolservice/schoolservice';
import {JoinPage} from '../join/join';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  inter() {
    //alert("Hello projects");
    this.navCtrl.setRoot(ProjectsPage);
  }

  school() {
  // alert("School");
    this.navCtrl.setRoot(SchoolservicePage);
  }

  join() {
    //alert("Joim");
    this.navCtrl.setRoot(JoinPage);
  }

}
