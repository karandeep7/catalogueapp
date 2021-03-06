import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirstPage } from "../firstpage/firstpage";
import { ContentsPage } from "../contents/contents";
import { FavouritePage } from "../favourite/favourite";
import { UpdatePage } from "../update/update";


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  firstPage = FirstPage;
  contentsPage = ContentsPage;
  favouritePage = FavouritePage;
  updatePage = UpdatePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
