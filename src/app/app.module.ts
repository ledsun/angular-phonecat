import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http' ;
import { Phone } from './phone/phone.service';
import { PhoneListController } from './phone-list/phone-list.component';
import { PhoneDetailController } from './phone-detail/phone-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
  ],
  providers: [
    Phone, PhoneListController, PhoneDetailController
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}

