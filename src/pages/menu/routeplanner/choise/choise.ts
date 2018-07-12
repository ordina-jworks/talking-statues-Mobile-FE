import { Component, QueryList, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StackConfig } from 'angular2-swing';
import {
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationmapPage } from '../../my-route/navigationmap/navigationmap';
import { MonumentService } from '../../../../services/monument.service';
import { Information, QueryMonuments } from '../../../../app/models/query';
import { Route } from '../../../../app/models/route';


@IonicPage()
@Component({
  selector: 'page-choise',
  templateUrl: 'choise.html',
})
export class ChoisePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  @ViewChildren('cardImages') cardImages: QueryList<any>;
  stackConfig: StackConfig;
  voteImg;
  user_language = 'NL';
  title = '';
  choisenList: QueryMonuments[] = [];
  currentList: QueryMonuments[] = [];
  responseList: Route;
  latitude: number;
  longitude: number;
  monumentNames: Information[] = [];
  like: boolean;

  route = {};
  monumentsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation,
              private _monumentService: MonumentService,
              private fb: FormBuilder,) {
    this.getUserLanguage();

    this.createMonumentForm();
    this.geolocation.getCurrentPosition()
      .then((locate) => {
        this.latitude = locate.coords.latitude;
        this.longitude = locate.coords.longitude;
        this.monumentsForm.controls['userLocation'].setValue({
          latitude: this.latitude,
          longitude: this.longitude
        })
      }).catch((error) => {
      console.log('Error getting location: ', error);
    });

    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        // console.log('selected card: ', this.cardImages);
        if (this.cardImages) {
          this.cardImages.last.nativeElement.src = '';
          this.onItemMove(element, x, y, r);
          if (x < -60) {
            if (this.cardImages.last) {
              this.cardImages.last.nativeElement.src = '../../../../assets/imgs/nope.png'
            }
          }
          if (x > 60) {
            if (this.cardImages.last) {
              this.cardImages.last.nativeElement.src = '../../../../assets/imgs/like.png';
            }
          }
        }

      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
    this.addNewCards();
  }

  getUserLanguage() {
    let language = this.user_language;
    switch (language) {
      case 'NL': {
        this.title = 'Plan je trip';
        break;
      }
      case 'GB': {
        this.title = 'Plan your trip';
        break;
      }
      case 'DE': {
        this.title = 'Planen Sie Ihre Reise';
        break;
      }
      case 'FR': {
        this.title = 'planifier votre voyage';
        break;
      }
      case 'ES': {
        this.title = 'planifica tu viaje';
        break;
      }
      default: {
        this.title = 'Plan je trip';
        break;
      }

    }
  }

  createMonumentForm() {
    this.monumentsForm = this.fb.group({
      name: ['Route :' + new Date(),],
      locations: [this.choisenList],
      userLocation: {
        latitude: 0.0,
        longitude: 0.0
      }
    });
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    this.cardImages.last.nativeElement.src = '';
  }

// Connected through HTML
  voteUp(like: boolean) {
    let monument = this.currentList.pop();
    if (like) {
      this.choisenList.push(monument);
      this.monumentNames = this.choisenList.map(res => res.information[0]);
      console.log(this.monumentNames);
    } else {
    }
  }

// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }
    return hex;
  }

  addNewCards() {
    this._monumentService.getSwipeMonuments().subscribe(
      res => {
        this.currentList = res;
        console.log(this.currentList);
      }
    );
  }

  getNewMonuments() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  sendRoutes() {
    if (this.choisenList.length > 0) {
      console.log(this.monumentsForm.value);
      this._monumentService.sendLikedMonumentIds(this.monumentsForm.value).subscribe(
        res => {
          this.responseList = res;
          console.log(this.responseList);
          this.navCtrl.push(NavigationmapPage, {
            data: this.responseList
          });
        })
    }
    else (
      alert('You need to select at least one monument to start a route.')
    )


  }
}


