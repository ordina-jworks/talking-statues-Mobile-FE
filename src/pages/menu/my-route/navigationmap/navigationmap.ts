import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { Route } from '../../../../app/models/monument';
import { InfoPage } from '../../info/info';


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
  startLatitude;
  startLongitude;
  monumentLatitude;
  monumentLongitude;
  markers: any[] = [];

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
      this.startLatitude = position.coords.latitude + '';
      this.startLongitude = position.coords.longitude + '';
      console.log('start: ' , this.startLatitude, this.startLongitude);
        let mapOptions = {
        center: latLng,
        zoom: 15,
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      // let markerList = this.receivedData.monuments.map(monument => new google.maps
      //   .Marker({position: {lat: monument.latitude, lng: monument.longitude}, map: this.map, title: monument.information[0].name})
      // );
      this.receivedData.monuments.map(monument => {
        this.monumentLatitude = monument.latitude,
        this.monumentLongitude = monument.longitude,
        this.markers.push(monument.latitude+','+monument.longitude),
          console.log(this.monumentLatitude, this.monumentLongitude);
      });

      // let currentPosition = this.receivedData.monuments.map(user => new google.maps
      //   .Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude}, map: this.map, title: 'Your current location'})
      //   .setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'));

      console.log(this.markers);
      this.directionsDisplay.setMap(this.map);
      this.calculateAndDisplayRoute();

    }), (error) => {
      console.log(error);
    }
  }

  calculateAndDisplayRoute() {
    let waypts = [];
    for (let i = 0; i < this.markers.length; i++) {
      waypts.push({
        location: this.markers[i]
      })
    }

    let destinationLat = Math.max(this.monumentLatitude);
    let destinationLong = Math.max(this.monumentLongitude);
    console.log('destination: ', destinationLat + ',' + destinationLong);

    console.log('waypoints: ', waypts)
    this.directionsService.route({
      origin: `${this.startLatitude}, ${this.startLongitude}`,
      destination: `${destinationLat}, ${destinationLong}`,
      waypoints: waypts,
      travelMode: 'WALKING',
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
