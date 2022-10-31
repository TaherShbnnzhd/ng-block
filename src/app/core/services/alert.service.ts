/* بسم الله الرحمن الرحیم */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alertMessage(message: string) {

    window.alert(message);
  }
}
