import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation() {
    this.navCtrl.push('SearchResultsPage', {
      username: this.username
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
