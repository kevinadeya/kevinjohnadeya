import { Component, stringify } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JoinInfo } from '../../models/joinInfo';


/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

public regInfo: JoinInfo = new JoinInfo;
public info: Array<JoinInfo>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }

  send() {

    let name 
    let email;
    let birth;
    let city;
    let type;
    let newsletter ;

    let obj = {
      name: this.regInfo.name,
      email:  this.regInfo.email,
      birth: this.regInfo.birth,
      city: this.regInfo.city,
      type: this.regInfo.type,
      newsletter: this.regInfo.newsletter
    }
    
       

    console.log(obj);
  }
  
  
}


