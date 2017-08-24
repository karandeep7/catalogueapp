import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentsPage } from './contents';
import { FirstPage } from '../firstpage/firstpage';

@NgModule({
  declarations: [
    ContentsPage,
    FirstPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentsPage),
  ],
  exports: [
    ContentsPage,
    FirstPage
  ]
})
export class ContentsPageModule {}
