import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { Phone } from './phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailController } from './phone-detail/phone-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    Phone, PhoneDetailController
  ],
  declarations: [
    PhoneListComponent,
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}

