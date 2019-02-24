import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Data} from "../../models/data.model";
import {DatasService} from "../../services/data.service";
import {LendCdPage} from "../lend-cd/lend-cd";

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cds: Data[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private dataService: DatasService) {
  }

  ionViewDidLoad() {
    this.cds = this.dataService.cdsList.slice();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onLoadData(i: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: i});
    modal.present();
  }

}
