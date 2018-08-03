import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { Route } from '../../../../app/models/monument';
import { Nav } from 'ionic-angular';
import { InfoPage } from './info/info';
import { TranslateService } from '../../../../../node_modules/@ngx-translate/core';

declare var google;

@IonicPage()
@Component({
  selector: 'page-navigationmap',
  templateUrl: 'navigationmap.html',
})
export class NavigationmapPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild(Nav) nav: Nav;

  map: any;
  title;
  receivedData: Route;
  monumentLatitude;
  monumentLongitude;
  markers: String[] = [];
  pos: any;
  destination: any;
  infoWindows: any;


  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public params: NavParams,
    public viewCtrl: ViewController,
    public translate: TranslateService
  ) {
    this.receivedData = params.get('data');
    this.title = this.receivedData.routeTitle;
    this.infoWindows = [];
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }


  public displayGoogleMap(): void {
    // everything starts with the current position coords
    let watch = this.geolocation.getCurrentPosition();
    watch.then((position) => {
      this.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // draw the google maps design
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: this.pos
      });

      // get all liked monuments their coords in a marker
      let mapMarkers: any[] = this.receivedData.monuments.map(monument =>
        new google.maps.Marker({
         position: {
            lat: monument.latitude,
            lng: monument.longitude
          },
          map: this.map,
          title: monument.information[0].name,
          data: monument,
        }));

      // global infowindow template to use
      var infowindow = new google.maps.InfoWindow({
        maxWidth: 350
      });

      this.createMarkers(mapMarkers, infowindow);
      this.currentLocationMarker();
      this.calculateAndDisplayRoute();
    });
  }

  public createMarkers(markers, infowindow): void {
    for(let marker of markers) {

      marker.addListener('click',() => {
        var content = document.createElement('div'),
          button;
        content.innerHTML = `<div>My monument name is ` + marker.title + `</div>`;
        button = content.appendChild(document.createElement('input'));
        button.type = 'button';
        button.innerHTML = `<div></div>`
        button.value = 'Click here to see my info.';

        // code to get data from JS code into Angular: from the on infowindow click event
        google.maps.event.addDomListener(button, 'click',() => {
          this.navCtrl.push(InfoPage, {
            infoData: marker.data
          })
        });
        infowindow.setContent(content);
        infowindow.open(this.map, marker);
       });
    }
  }


  public currentLocationMarker(): void {
    var contentString1 = 'Your Current Location.';
    var infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
    });
    var startMarker = new google.maps.Marker({
      position: this.pos,
      map: this.map,
      title: 'your current Position ( Home)'
    });
    startMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
    startMarker.addListener('click', function() {
      infowindow1.open(this.map, startMarker);
    });
  }


  public calculateAndDisplayRoute(): void {
    // needed to implement in directions api logic
    this.receivedData.monuments.map(monument => {
      this.monumentLatitude = monument.latitude,
        this.monumentLongitude = monument.longitude,
        this.markers.push(monument.latitude +','+ monument.longitude)
    });
    let waypts = [];
    for (let i = 0; i < this.markers.length; i++) {
      waypts.push({
        location: this.markers[i]
      })
    }
    let destinationLat = Math.max(this.monumentLatitude);
    let destinationLong = Math.max(this.monumentLongitude);
    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: '#DD0F58'
      }
    });
    this.directionsDisplay.setMap(this.map);
    this.directionsService.route({
      origin: this.pos,
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


  public onDismiss(): void {
    this.viewCtrl.dismiss();
  }

}
