import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	options : InAppBrowserOptions = {
	    location : 'no',//Or 'no' 
	    hidden : 'no', //Or  'yes'
	    clearcache : 'yes',
	    clearsessioncache : 'yes',
	    zoom : 'no',//Android only ,shows browser zoom controls 
	    hardwareback : 'no',
	    mediaPlaybackRequiresUserAction : 'no',
	    shouldPauseOnSuspend : 'no', //Android only 
	    closebuttoncaption : 'Close', //iOS only
	    disallowoverscroll : 'no', //iOS only 
	    toolbar : 'no', //iOS only 
	    enableViewportScale : 'no', //iOS only 
	    allowInlineMediaPlayback : 'no',//iOS only 
	    presentationstyle : 'pagesheet',//iOS only 
	    fullscreen : 'yes',//Windows only    
	};
  constructor(public navCtrl: NavController,private iab: InAppBrowser) {
  	
  }

  ngOnInit() {    
    this.loadData();
  }

  public loadData() {
  	let url = "http://ekova.dlinkddns.com/ekoNET"
  	let target = "_blank";
  	// var options = "hidden=no,toolbar=no,location=no,presentationstyle=fullscreen,clearcache=yes,clearsessioncache=yes";    
  	// let options = "hidden=yes,toolbar=no,location=no,presentationstyle=fullscreen";
   //  let browser = this.iab.create(url,target,options);

   //  browser.show();

    this.iab.create(url,target,this.options);
     
  }
}
