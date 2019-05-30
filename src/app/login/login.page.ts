import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  username: string;
  password: string;
  constructor(private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
    console.log('ngOninit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestory');
  }

  ionViewWillEnter() {
    //  กำลังจะแสดง พวก animation เปลี่ยนหน้าจอ
  }

  ionViewDidEnter() {
    // หน้าจอแสดงสำเร็จ
  }
  ionViewWillLeave() {
    //  กำลังจะแสดง ออกจากหน้าจอนี้
  }

  ionViewDidLeave() {
    // ออกจากหน้านี้แล้ว
  }

  onGoHome() {
    // this.router.navigate(['/home']);
    // navController จะมี animation ให้
    // this.navController.navigateRoot(['/home']);
    // this.navController.navigateForward(['/home']);
    if (this.username.length < 4) {
      this.alert('TT');
      return;
    }
    this.navController.navigateForward(['/todo']);
    console.log(this.username, this.password);

  }

  private async alert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: msg,
      buttons: ['OK', 'Cancel']
    });
    await alert.present();
  }

}
