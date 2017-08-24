import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from "../firstpage/firstpage";
import { ContentsPage } from "../contents/contents";
import { FavouritePage } from "../favourite/favourite";
import { UpdatePage } from "../update/update";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firstPage = FirstPage;
  contentsPage = ContentsPage;
  favouritePage = FavouritePage;
  updatePage = UpdatePage;

  constructor(public navCtrl: NavController) {

  }

itemSelected(item) 
{
  console.log(item);
}
}
