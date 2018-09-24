import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string
  password: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ApiProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {
    //console.log("Let's log in", this.username, this.password);
    return this.API.getCredentials(this.username, this.password)
      .then(response => {
        return response
      })
      .then(res => {
        return this.storage.set('token', res.token)
      })
      .then(token => {
        if (token.length > 0 ) {
          this.navCtrl.setRoot(HomePage)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

}
