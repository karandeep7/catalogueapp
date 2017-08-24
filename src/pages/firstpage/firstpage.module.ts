import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstPage } from './firstpage';

@NgModule({
  declarations: [
    FirstPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstPage),
  ],
  exports: [
    FirstPage
  ]
})
export class FirstPageModule {}
