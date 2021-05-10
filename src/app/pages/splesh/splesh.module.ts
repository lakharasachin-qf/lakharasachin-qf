import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpleshPageRoutingModule } from './splesh-routing.module';

import { SpleshPage } from './splesh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpleshPageRoutingModule
  ],
  declarations: [SpleshPage]
})
export class SpleshPageModule {}
