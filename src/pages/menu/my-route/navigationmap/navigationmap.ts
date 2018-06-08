import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { Route } from '../../../../app/models/monument';


declare var google;

@IonicPage()
@Component({
  selector: 'page-navigationmap',
  templateUrl: 'navigationmap.html',
})
export class NavigationmapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  title: string;
  receivedData: Route;
  start;
  end;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.receivedData = params.get('data');
    console.log(this.receivedData);
    this.title = this.receivedData.routeTitle;
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
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let markers = this.receivedData.monuments.map(monument => new google.maps
        .Marker({position: {lat: monument.latitude, lng: monument.longitude}, map: this.map, title: monument.information[0].name}));
      let currentPosition = this.receivedData.monuments.map(user => new google.maps
        .Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude}, map: this.map, title: 'Your current location'})
        .setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'));

      this.start = currentPosition;
      this.end = markers;
      console.log(this.start);
      this.directionsDisplay.setMap(this.map);
      this.calculateAndDisplayRoute();

    }), (error) => {
      console.log(error);
    }
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }



  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
