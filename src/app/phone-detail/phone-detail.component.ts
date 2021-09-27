import { Injectable } from "@angular/core";
import { getAngularJSGlobal } from "@angular/upgrade/static";
import { Phone, PhoneData } from "../phone/phone.service";

@Injectable()
export class PhoneDetailController {
    phone: PhoneData;
    mainImageUrl: string;
  
    static $inject = ['$routeParams', 'Phone'];
    constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
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
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
