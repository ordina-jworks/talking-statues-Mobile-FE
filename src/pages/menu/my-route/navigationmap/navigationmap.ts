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

  map;
  directionsService;
  directionsDisplay;
  monuments;
  markers = [];

  droppedMarker;

  title;
  receivedData: Route;

  startLatitude;
  startLongitude;
  monumentLatitude;
  monumentLongitude;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation,
              public params: NavParams,
              public viewCtrl: ViewController,
              ) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.startLatitude = position.coords.latitude + '';
      this.startLongitude = position.coords.longitude + '';

      let mapOptions = {
        center: latLng,
        zoom: 15,
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.monuments = this.loadMonuments();
      this.generateMarkersAndCards();
      this.listenToMapClicksAndDropMarker();
      // this.receivedData.monuments.map(monument => {
      //   this.monumentLatitude = monument.latitude,
      //   this.monumentLongitude = monument.longitude
      //   // this.markers.push(monument.latitude+','+monument.longitude)
      // });
    });
  };

  loadMonuments() {
    return this.receivedData = this.params.get('data'),
    this.title = this.receivedData.routeTitle;
  }

  generateMarkersAndCards() {
    for (let i = 0; i < this.receivedData.monuments.length; i++) {
      let monument = this.receivedData.monuments[i];

      let marker = new google.maps.Marker({
        position: (monument.latitude + ',' + monument.longitude),
        map: this.map,
        title: monument.information[0].name,
      });
      let infowindow = new google.maps.InfoWindow({
        content: `<div id="content">` +
        `<h1>monument.information[0].name</h1>`,
        maxWidth: 489
      });
      marker.infowindow = infowindow;
      marker.addListener('click', function () {
        return this.infowindow.open(this.map, this);
      });
      this.markers.push(marker);
    }

    // let markerList = this.receivedData.monuments
    //   .map(monument => new google.maps
    //   .Marker({position: {lat: monument.latitude, lng: monument.longitude}, map: this.map, title: monument.information[0].name })
    // );
    //
    //   let currentPosition = this.receivedData.monuments
    //     .map(user => new google.maps
    //     .Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude}, map: this.map, title: 'Your current location'})
    //     .setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'));
  }

  listenToMapClicksAndDropMarker(){
    this.map.addListener('click', function(event){
      if(this.droppedMarker != null)
      {	//clears previous marker, only one
        this.droppedMarker.setMap(null);
      }
      this.droppedMarker = new google.maps.Marker({
        position : event.latLng,
        map: this.map,
        title : 'Location: ' + event.latLng.lat() + ', ' + event.latLng.lng(),
        infowindow : new google.maps.InfoWindow({
          content: 'Hello'
        })
      });
      this.droppedMarker.addListener('click', function() {
        return this.infowindow.open(this.map, this);
      });

      //call route display (will check if building is selected)
      // needed to ensure route changes on new marker
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
    });
  }



  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let waypts = [];
    console.log(this.markers);
    for (let i = 0; i < this.markers.length; i++) {
      waypts.push({
        location: this.markers[i]
      })
    }
    let destinationLat = Math.max(this.monumentLatitude);
    let destinationLong = Math.max(this.monumentLongitude);

    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: 'green'
      }
    });

    this.directionsDisplay.setMap(this.map);

  this.directionsService.route({
    origin: `${this.startLatitude}, ${this.startLongitude}`,
    destination: '',
    // destination: `${destinationLat}, ${destinationLong}`,
    // waypoints: waypts,
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
