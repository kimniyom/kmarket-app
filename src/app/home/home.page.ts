import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private iab: InAppBrowser, 
    private statusBar: StatusBar,
    private geolocation: Geolocation
    ) {
    //this.openSystem();
  }

  

  ngOnInit() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  //openBlank() {
    //const options: InAppBrowserOptions = {
      //location: 'no',//Or 'no' 
      //hidden: 'no', //Or  'yes'
      //zoom: 'no',//Android only ,shows browser zoom controls 
      //hideurlbar: 'yes',//Or 'no'
    //}
    //this.iab.create('https://jehmuaymarket.com/site/index', '_self', options);
  //}
  openSystem() {
    const options: InAppBrowserOptions = {
      location: 'no',//Or 'no' 
      hidden: 'no', //Or  'yes'
      zoom: 'no',//Android only ,shows browser zoom controls 
      hideurlbar: 'yes',//Or 'no'
    }
    this.iab.create('https://jehmuaymarket.com/site/index', '_self', options);
  }
}
