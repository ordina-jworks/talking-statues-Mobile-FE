import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Language, Monument } from '../../../app/models/monument';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  monumentData: Monument[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.monumentData = navParams.get('infoData');
    console.log(this.monumentData);
  }

  public onDismiss(): void {
    this.viewCtrl.dismiss();
  }


}
