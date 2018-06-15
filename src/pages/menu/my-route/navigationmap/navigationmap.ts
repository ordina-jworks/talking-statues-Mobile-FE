import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { Route } from '../../../../app/models/monument';
import { InfoPage } from '../../info/info';
import 'rxjs/add/operator/map';
import { DeepLinkConfig } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-navigationmap',
  templateUrl: 'navigationmap.html',

})
export class NavigationmapPage {
  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild(Nav) navChild:Nav;

  map: any;
  infoWindows: any;
  pos: any;
  marker: any;
  title;
  receivedData: Route;
  markers = [];
  info = [];

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public geolocation: Geolocation,
              public params: NavParams,
              // private deeplinks: DeepLinkConfig
              ) {
    this.receivedData = this.params.get('data');
    this.title = this.receivedData.name;
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    console.log(this.receivedData);
    this.displayGoogleMap();
  }

  displayGoogleMap() {

    let watch = this.geolocation.getCurrentPosition();
    watch.then((position) => {
      this.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: this.pos
      });

      let markers: any[] = this.receivedData.monuments.map(monument =>
        new google.maps.Marker({ //import fixen naar Markers({...
          position: {
            lat: monument.latitude,
            lng: monument.longitude
          },
          map: this.map,
          title: monument.information[0].name,
          data: monument,
        }));

      var infowindow = new google.maps.InfoWindow({
        maxWidth: 350
      });

      markers.forEach(marker => marker.addListener('click', function () {
        var content = document.createElement('div'),
          button;
        content.innerHTML = 'My monument name is   ' + marker.title;
        button = content.appendChild(document.createElement('input'));
        button.type = 'button';
        button.value = 'Click here to see my info.'
        google.maps.event.addDomListener(button, 'click', function () {
          sendInfo(marker.data);
        });

        function sendInfo(marker) {
          console.log(marker);
        }
        infowindow.setContent(content);
        infowindow.open(this.map, marker);
      }));

      var contentString1 = 'Your Current Location.';
      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1,
      });
      console.log('startPosition: ',this.pos);
      var startMarker = new google.maps.Marker({
        position: this.pos,
        map: this.map,
        title: 'your current Position ( Home)'
      });
      startMarker.addListener('click', function () {
        infowindow1.open(this.map, startMarker);
        });
    });
  }
  onDismiss() {
    this.viewCtrl.dismiss();
  }
}

  //   let latLng = new google.maps.LatLng(51.295178500000006,4.7779182);
  //   let mapOptions = {
  //     center: latLng,
  //     disableDefaultUI: true,
  //     zoom: 11,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //
  //   this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  // }
  //
  // getMarkers() {
  //   let markerList = this.receivedData.monuments
  //     .map(monument => new google.maps
  //       .Marker({position: {lat: monument.latitude, lng: monument.longitude}, map: this.map, title: monument.information[0].name })
  //     );
  //   console.log(markerList);
  //   this.addMarkersToMap(markerList);
  //
  // this.http.get('assets/data/markers.json')
  //   .map((res) => res.json())
  //   .subscribe(data => {
  //     this.addMarkersToMap(data);
  //   });
  // }
  //
  // addMarkersToMap(markers) {
  //   for(let marker of markers) {
  //     var position = new google.maps.LatLng(marker.latitude, marker.longitude);
  //     var dogwalkMarker = new google.maps.Marker({
  //       position: position,
  //       title: marker.name
  //     });
  //     dogwalkMarker.setMap(this.map);
  //     this.addInfoWindowToMarker(dogwalkMarker);
  //   }
  // }
  //
  // addInfoWindowToMarker(marker) {
  //   var infoWindowContent =
  //     '<div id="content"><h1 id="firstHeading" class="firstHeading">'
  //     + marker.title + '</h1></div>';
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: infoWindowContent
  //   });
  //   marker.addListener('click', () => {
  //     this.closeAllInfoWindows();
  //     infoWindow.open(this.map, marker);
  //   });
  //   this.infoWindows.push(infoWindow);
  // }
  //
  // closeAllInfoWindows() {
  //   for(let window of this.infoWindows) {
  //     window.close();
  //   }
  // }

  // @ViewChild('map') mapElement: ElementRef;
  //
  // directionDisplay;
  // directionsService = new google.maps.DirectionsService();
  // infowindow = new google.maps.InfoWindow();
  // map;
  // latLng;
  // startLatitude;
  // startLongitude;
  // start;
  // end;
  //
  // constructor(
  //   public navCtrl: NavController,
  //   public navParams: NavParams,
  //   public geolocation: Geolocation,
  //   public params: NavParams,
  //   public viewCtrl: ViewController,
  // ) {
  //
  // }
  //
  // ionViewDidLoad() {
  //     this.initialize()
  //   }
  //
  // initialize() {
  //   this.directionDisplay = new google.maps.DirectionsRenderer({
  //     suppressMarkers: true
  //   });
  //
  //   this.geolocation.getCurrentPosition().then((position) => {
  //     this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     this.startLatitude = position.coords.latitude + '';
  //     this.startLongitude = position.coords.longitude + '';
  //
  //     let mapOptions = {
  //       center: this.latLng,
  //       zoom: 12,
  //     }
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  //     this.directionDisplay.setMap(this.map);
  //     this.calcRoute();
  //   });
  // }
  //
  // calcRoute() {
  //
  //   // let start = new google.maps.LatLng(`${this.startLatitude}, ${this.startLongitude}`);
  //   this.start = new google.maps.LatLng(51.2952106,4.7779297);
  //   this.end = new google.maps.LatLng(51.1886235713,4.3723547459);
  //
  //   console.log(this.start);
  //
  //   this.createMarker(this.start, 'start');
  //   this.createMarker(this.end, 'end');
  //
  //   let request = {
  //     origin: this.start,
  //     destination: this.end,
  //     // optimizeWaypoints: true,
  //     travelMode: 'WALKING'
  //   };
  //
  //   this.directionsService.route(request, function (response, status) {
  //     if (status === 'OK') {
  //       this.directionsDisplay.setDirections(response);
  //       console.log(response);
  //     }
  //   });
  // }
  //
  // createMarker(latLng, title) {
  //   let marker = new google.maps.Marker({
  //     position: latLng,
  //     title: title,
  //     map: this.map
  //   });
  //
  //   google.maps.event.addListener(marker, 'click', function () {
  //     this.infowindow.setContent(this.title);
  //     this.infowindow.open(this.map, this.marker);
  //   });
  // }

  // calculateAndDisplayRoute(directionsService, directionsDisplay) {
  //   let waypts = [];
  //   console.log(this.markers);
  //   for (let i = 0; i < this.markers.length; i++) {
  //     waypts.push({
  //       location: this.markers[i]
  //     })
  //   }
  //   let destinationLat = Math.max(this.monumentLatitude);
  //   let destinationLong = Math.max(this.monumentLongitude);
  //
  //   this.directionsDisplay.setOptions({
  //     polylineOptions: {
  //       strokeColor: 'green'
  //     }
  //   });
  //
  //   this.directionsDisplay.setMap(this.map);
  //
  // this.directionsService.route({
  //   origin: `${this.startLatitude}, ${this.startLongitude}`,
  //   destination: '',
  //   // destination: `${destinationLat}, ${destinationLong}`,
  //   // waypoints: waypts,
  //   travelMode: 'WALKING',
  // }, (response, status) => {
  //   if (status === 'OK') {
  //     this.directionsDisplay.setDirections(response);
  //     console.log(response);
  //   } else {
  //     window.alert('Directions request failed due to ' + status);
  //   }
  // });
  // }
  //
  // onDismiss() {
  //   this.viewCtrl.dismiss();
  // }


