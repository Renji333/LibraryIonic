import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Data} from "../../models/data.model";
import {DatasService} from "../../services/data.service";

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  cd: Data;

  constructor(
    public viewCtrl: ViewController,
    public datasService: DatasService,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    let index = this.navParams.get('index');
    this.cd = this.datasService.cdsList[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLend() {
    this.cd.isLend = !this.cd.isLend;
  }

}
