/* بسم الله الرحمن الرحیم */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from '@shared/models/response.model';
import { AppConfigService } from '../services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private config: AppConfigService) { }

  public fetchUsers() {

    return this.http.get<IUser[]>(this.config.getAddress('User_Address'));
  }
}
