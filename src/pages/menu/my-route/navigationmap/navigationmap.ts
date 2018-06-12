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
  title;
  receivedData: Route;
  startLatitude;
  startLongitude;
  monumentLatitude;
  monumentLongitude;
  markers: any[] = [];

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.receivedData = params.get('data');
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
          let mapOptions = {
          center: latLng,
          zoom: 15,
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.receivedData.monuments.map(monument => {
          this.title = monument.information[0].name,
          this.monumentLatitude = monument.latitude,
          this.monumentLongitude = monument.longitude,
          this.markers.push(monument.latitude+','+monument.longitude)
        });


        let currentPosition = this.receivedData.monuments.map(user => new google.maps
          .Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude}, map: this.map, title: 'Your current location'})
          .setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'));

        // console.log(this.markers);

        this.calculateAndDisplayRoute();

      }), (error) => {
        console.log(error);
      }
    }

  createMarker(position, title) {
    new google.maps.Marker({
      position: position,
      map: this.map,
      title: title
    });
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

    this.directionsDisplay.setMap(this.map);

    // let request = {
    //   origin: `${this.startLatitude}, ${this.startLongitude}`,
    //   destination: `${destinationLat}, ${destinationLong}`,
    //   waypoints: waypts,
    //   travelMode: 'WALKING',
    // }
    //
    // this.directionsService.route({
    //   origin: `${this.startLatitude}, ${this.startLongitude}`,
    //   destination: `${destinationLat}, ${destinationLong}`,
    //   waypoints: waypts,
    //   travelMode: 'WALKING',
    // }, (response, status) =>{
    //   if (status === 'OK') {
    //     this.directionsDisplay.setDirections(request, response);
    //     let leg = response.routes[ 0 ].legs[ 0 ];
    //     this.createMarker( request.origin, 'title');
    //     this.createMarker( request.destination, 'title');
    //     this.createMarker(leg.waypoints, 'title');
    //   } else {
    //         window.alert('Directions request failed due to ' + status);
    //       }
    // });

    this.directionsService.route({
      origin: `${this.startLatitude}, ${this.startLongitude}`,
      destination: `${destinationLat}, ${destinationLong}`,
      waypoints: waypts,
      travelMode: 'WALKING',
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        console.log(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
