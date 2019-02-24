import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import {Data} from "../../models/data.model";
import {DatasService} from "../../services/data.service";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  book: Data;

  constructor(
    public viewCtrl: ViewController,
    public datasService: DatasService,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    let index = this.navParams.get('index');
    this.book = this.datasService.livresList[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLend() {
    this.book.isLend = !this.book.isLend;
  }

}
