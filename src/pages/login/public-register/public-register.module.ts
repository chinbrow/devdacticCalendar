import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicRegisterPage } from './public-register';

@NgModule({
  declarations: [
    PublicRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicRegisterPage),
  ],
})
export class PublicRegisterPageModule {}