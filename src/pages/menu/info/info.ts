import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Language, Monument } from '../../../app/models/monument';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  monumentData: Monument[];

  image;
  monuments: Monument[] =[
    {
      id:'5b22139c95fe1300018f1a83',
      information:[{
        name: 'de NEUS',
        language:Language.NL,
        description: "Frans was een grote kerel die bang was van werken.  " +
        "Hij was niet gehuwd en sliep steeds gekleed op wat zakkengoed.  " +
        "Hij dacht er niet aan de handen uit de mouwen te steken als hij nog enkele franken op zak had.\n" +
        "In de Spiegelpoort van de Nationalestraat bevond zich de stapelplaats van houthandelaar Blanckaert.  " +
        "De café's in de buurt hadden aan hem een goede klant.  " +
        "Frans leed namelijk aan chronische dorst die hij probeerde te lessen met romers \\" +
        "Pinard\",een soort rode wijn.  Vaste klant was hij in het \\\"Pinardkot\\\" op de hoek van de Lange Vlierstraat en het pleintje aan de Nationalestraat.\\n" +
        "Als Frans in het \\\"Pinardkot\\\" honger kreeg, kocht hij een pak frieten met pickels en een worst.  " +
        "Of\\nhij haalde in de Steenbergstraat een \\\"gardevil\\\", een gerookte haring die hij met vel en graten\\nnaar binnen slokte.  " +
        "Natuurlijk werden frieten of \\\"gardevils\\\" flink doorgespoeld met enorme hoeveelheden \\\"Pinard\\\".\\n" +
        "Ook hielpen de lossers en de laders van Blanckaert elkaar aan eten.  Zo had Jef, de chauffeur,\\nFrans de overschot van aardappelen met stoofkarbonaden aangeboden.  " +
        "Die had hongerige Frans gretig aangenomen.  Hij at alles likkebaardend op zonder te merken dat Jef de aardappelen en karbonaden had opgemaakt met gestampte rode baksteen en roet van de kachel.\\n" +
        "Eens wilde Frans de Neus een biefstuk braden.  Terwijl deze op het gasvuur in de pan lag, was Frans in slaap gevallen.  Plots werd hij wakker door een brandgeur.  " +
        "Hij probeerde het vuur te blussen en zocht naar een fles water, maar hij goot er per vergissing een fles petroleum over.  " +
        "Toen het brandje heviger begon te laaien wierp hij er zijn jas over om het te doven.  " +
        "Toen men\\nFrans de Neus maanden later tegenkwam rook zijn jas nog naar verbrand goed.\\n" +
        "Hij blijft in de herinnering als één van de stevigste Pinard-drinkers uit het Sint-Andrieskwartier.\\n",
        question:[],
      }],
      area:"Sint-Andries",
      picture: 'statue1.jpg',
      // imageRef: 'https://images.standbeelden.be/600x0/1363/Antoon%20Van%20Dyck.jpg',
      latitude: 51.2149218763,
      longitude: 4.398393631
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook,
  ) {
    // this.monumentData = this.monuments.map(m => m.information);
    this.monumentData = this.monuments;

    console.log(this.monumentData);
    this.image = `http://localhost:9000/monuments/${this.monumentData[0].id}/image`
    // fb.getLoginStatus()
    //   .then(data => {
    //     this.getUserDetail(data.authResponse.userID);
    //   })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InfoPage');
  }

  // getUserDetail(userid) {
  //   this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
  //     .then(res => {
  //       this.userData = res;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

}
