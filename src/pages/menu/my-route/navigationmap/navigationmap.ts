import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-navigationmap',
  templateUrl: 'navigationmap.html',
})
export class NavigationmapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {
    console.log(params.get('myRouteData'));
  }
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,

      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }), (error) => {
      console.log(error);
    }
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }
}
