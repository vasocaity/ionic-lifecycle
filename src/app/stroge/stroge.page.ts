import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-stroge',
  templateUrl: './stroge.page.html',
  styleUrls: ['./stroge.page.scss'],
})
export class StrogePage implements OnInit {

  constructor(private storage: Storage) { }
  val: string;
  textInput: string;
  lableReadStorage: string;
  ngOnInit() {
  }

  onSave() {
    // set a key/value
    console.log(this.val);
    this.storage.set('name', this.val);
  }
  onClickRead() {
    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('My storage is', val);
      this.lableReadStorage = val;
    });
    this.storage.clear();
  }
}
