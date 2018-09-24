import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public API: ApiProvider) {
    
  }
  ionViewDidLoad() {
    
    return this.API.getRaces()
    .then(response => {console.log(response)})
    .catch(err => console.log(err))
  }


}
