import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirstPage } from "../firstpage/firstpage";
import { SecondPage } from "../second/second";
import { ThirdPage } from "../third/third";
import { GeneralPage } from "../general/general";

/**
 * Generated class for the ContentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {
    firstPage = FirstPage;
    items = [
    'Customer Relationship Management Solution',

    'Order Generation & Fulfilment',

    'Manufacturing Execution Solution',

    'Product Quality Management Solution',

    'Shipment , Transport &  Logistics Solution',

    'Super Mario World'

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }

  gotopage(item)
  {
    if(item == 'Customer Relationship Management Solution')
      this.navCtrl.push(FirstPage);
    
    else if(item == 'Order Generation & Fulfilment')
      this.navCtrl.push(SecondPage);

    else if(item == 'Manufacturing Execution Solution')
      this.navCtrl.push(ThirdPage);

    else
      this.navCtrl.push(GeneralPage);
  }
  getItems(ev)
  {
    var val = ev.target.value;
     if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  
    } 
  }

}

