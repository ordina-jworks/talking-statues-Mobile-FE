import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StackConfig } from 'angular2-swing';
import {
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
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

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';


  activitylist: Array<any> =[
    {
      gender: 'male',
      name: {
        title: 'Sir',
        first: 'Antoon',
        last: 'Van Dyck'
      },
      location: {
        street: '127 Meir',
        city: 'Antwerpen',
        state: 'Provincie Antwerpen',
        postcode: '2000'
      },
      picture: {
        medium: 'https://www.google.be/search?biw=1440&bih=755&tbs=isz%3Am&tbm=isch&sa=1&ei=qiYVW9XfKOnjsAf44LqgBA&q=antoon+van+dyck+standbeeld&oq=antoon+van+dyck+standbeeld&gs_l=img.3..0j0i30k1.6279.8061.0.8132.11.5.0.6.6.0.80.262.5.5.0....0...1c.1.64.img..0.11.277...0i8i30k1j0i24k1j0i10i24k1.0.hM2IqR5zj6o#imgrc=nT_QBi6xMzdRvM:'
      }
    },
    {
      gender: 'male',
      name: {
        title: 'Baron',
        first: 'Hendrik',
        last: 'Leys'
      },
      location: {
        street: 'Louiza-Marialei',
        city: 'Antwerpen',
        state: 'Provincie Antwerpen',
        postcode: '2000'
      },
      picture: {
        medium: 'http://www.standbeelden.be/standbeeld/333'
      }
    },
  ];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {

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
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [{email: ''}];
    this.addNewCards(1);
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
    let removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.email;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.email;
    }
  }

// Add new cards to our array
  addNewCards(count: number) {
    const data = this.cards;
    console.log(data);
    this.http.get('https://randomuser.me/api/?results=' + count)
      .map(data => data.json().results)
      .subscribe(result => {
        for (let val of result) {
          this.cards.push(val);
        }
      })
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
}


