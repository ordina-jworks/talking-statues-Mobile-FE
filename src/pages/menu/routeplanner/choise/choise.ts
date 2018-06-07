import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StackConfig } from 'angular2-swing';
import {
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Language, Monument } from '../../../../app/models/monument';
import { Geolocation} from '@ionic-native/geolocation';
import { MyRoutePage } from '../../my-route/my-route';
/**
 * Generated class for the ChoisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choise',
  templateUrl: 'choise.html',
})
export class ChoisePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  stackConfig: StackConfig;
  recentCard: string = '';
  choisenList: Monument[] = [];
  currentList: Monument[] = [];
  latitude;
  longitude;

  monuments: Monument[] =[
    {
      id:'hdfhdfhgxffrdrbdrfghdsfsfsf',
      information:[{
        name: 'Antoon Van Dyck',
        language:Language.NL,
        description: 'mens op een voetstuk',
        question:[],
      }],

      area:"meir",
      imageRef: 'https://images.standbeelden.be/600x0/1363/Antoon%20Van%20Dyck.jpg',
      latitude: 51.218,
      longitude: 4.413
    },
    {
      id:'hdffhgxfhgxdfgxfhxf',
      information:[{
        name: 'Baron Hendrik Leys',
        language:Language.NL,
        description: 'mens op een voetstuk',
        question:[],
      }],
      area:"Louiza-Marialei",
      imageRef: 'https://images.standbeelden.be/300x0/931/Baron%20Hendrik%20Leys.jpg',
      latitude:1.1,
      longitude:1.1
    },
    {
      id:'hdfhdfhfhgdjjgmgmdrfghdsfsfsf',
      information:[{
        name: 'Antoon Van Dyck2',
        language:Language.NL,
        description: 'mens op een voetstuk',
        question:[],
      }],

      area:"meir",
      imageRef: 'https://images.standbeelden.be/600x0/1363/Antoon%20Van%20Dyck.jpg',
      latitude:1.1,
      longitude:1.1
    }
  ];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public choiseEvent: Events,
    private geolocation: Geolocation
  ) {
    this.currentList = this.monuments;

    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };

    geolocation.getCurrentPosition()
      .then((locate) => {
        this.latitude = locate.coords.latitude;
        this.longitude = locate.coords.longitude;
        console.log('Current Location coordinates are:' , this.latitude + ' latitude & ' + this.longitude + ' longitude.')
    }).catch((error) => {
      console.log('Error getting location: ', error);
    })
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

// Connected through HTML
  voteUp(like: boolean) {
    let monument = this.currentList.pop();
    if(this.currentList.length == 0){
    }

    if (like) {
      this.recentCard = 'You liked: ' + monument.information[0].name;
      this.choisenList.push(monument);
    } else {
      this.recentCard = 'You disliked: ' + monument.information[0].name;
    }
  }

// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }
    return hex;
  }

  getNewMonuments() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  goToRoutes() {
    // this.choiseEvent.publish('list:like', this.choisenList);
    this.navCtrl.push(MyRoutePage, {
      data: this.choisenList
    });
  }
}


