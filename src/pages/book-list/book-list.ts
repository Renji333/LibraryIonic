import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Data} from "../../models/data.model";
import {DatasService} from "../../services/data.service";
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books: Data[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private dataService: DatasService) {
  }

  ionViewDidLoad() {
    this.books = this.dataService.livresList.slice();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onLoadData(i: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: i});
    modal.present();
  }

}
