import { Injectable } from '@angular/core';
import { getAngularJSGlobal } from '@angular/upgrade/static';
import { Phone, PhoneData } from '../phone/phone.service';

@Injectable()
export class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['Phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

const angular = getAngularJSGlobal()
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
