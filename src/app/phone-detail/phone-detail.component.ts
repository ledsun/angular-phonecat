import { Component } from "@angular/core";
import { downgradeComponent, getAngularJSGlobal } from "@angular/upgrade/static";
import { RouteParams } from "../ajs-upgraded-providers";
import { Phone, PhoneData } from "../phone/phone.service";

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor($routeParams: RouteParams, phone: Phone) {
    const phoneId = $routeParams.phoneId;
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

const angular = getAngularJSGlobal()
angular.
  module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({ component: PhoneDetailComponent }) as angular.IDirectiveFactory
  );