import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrogePage } from './stroge.page';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    component: StrogePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StrogePage,
    CardComponent
  ]
})
export class StrogePageModule {}
