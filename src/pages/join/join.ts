import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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
    
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    console.log(JSON.stringify(obj));

     this.http.post('http://localhost:3000/join', JSON.stringify(obj), { headers: headers} )
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
       

    
  }
  
  
}


