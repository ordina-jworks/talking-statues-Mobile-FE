import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { Monument, Route } from '../../../../app/models/monument';
import { InfoPage } from '../../info/info';
import { Nav } from 'ionic-angular';

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
  ) {
    let Key = "AIzaSyB8XRZJKwlGjlWu15KRI7j-6VFT_LL9TDE";
    this.receivedData = params.get('data');
    this.title = this.receivedData.routeTitle;
    this.infoWindows = [];
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }

  displayGoogleMap() {
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

      // needed to implement in directions api logic
      this.receivedData.monuments.map(monument => {
        this.monumentLatitude = monument.latitude,
          this.monumentLongitude = monument.longitude,
          this.markers.push(monument.latitude +','+ monument.longitude)
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

      // code for info windows per marker
      for(let marker of mapMarkers) {

        marker.addListener('click', function () {
          var content = document.createElement('div'),
            button;
          content.innerHTML = 'My monument name is   ' + marker.title;
          button = content.appendChild(document.createElement('input'));
          button.type = 'button';
          button.value = 'Click here to see my info.';

          // code attempt to get data from JS code into Angular: from the on infowindow click event
          google.maps.event.addDomListener(button, 'click', () => {
            console.log(marker.data);
            // var navParent = this.navCtrl.parent.parent as NavController;
            // console.log(navParent);
            // navParent.push('InfoPage', {
            //   infoData: console.log(marker.data)
            // });
          });

          infowindow.setContent(content);
          infowindow.open(this.map, marker);
        });
      }

      // seperate same logic as monument markers, but for currentlocation marker.
      var contentString1 = 'Your Current Location.';
      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1,
      });

      var startMarker = new google.maps.Marker({
        position: this.pos,
        map: this.map,
        title: 'your current Position ( Home)'
      });
      startMarker.addListener('click', function () {
        infowindow1.open(this.map, startMarker);
      });

      this.calculateAndDisplayRoute();
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
    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: 'orange'
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
