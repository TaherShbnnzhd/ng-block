/* بسم الله الرحمن الرحیم */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, retry } from 'rxjs';

import { IUser } from '@shared/models/response.model';
import { AppConfigService } from '../services/app-config.service';
import { HttpErrorHandlerService } from './http-error-handler/http-error-handler.service';
import { HandleError } from './http-error-handler/http-error-handler.type';


@Injectable()
export class HttpService {

  private userUrl: string;

  private httpOptions: { headers: HttpHeaders };

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
    public httpErrorHandler: HttpErrorHandlerService
  ) {

    this.userUrl = this.config.getAddress('User_Address');

    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.handleError = httpErrorHandler.createHandleError('HttpService');
  }

  /** GET: fetch users from User_Address in config. */
  public getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>(this.userUrl)
      .pipe(retry(3), catchError(this.handleError('getUsers', [])));
  }

  //////// Save methods //////////

  /** POST: add a new User to the database */
  public addUser(user: IUser): Observable<IUser> {

    return this.http.post<IUser>(this.userUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError('addUser', user)));
  }

  /** PUT: update the user on the server. Returns the updated hero upon success. */
  public updateUser(user: IUser): Observable<IUser> {

    return this.http.put<IUser>(this.userUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError('updateUser', user)));
  }

  /** DELETE: delete the User from the server */
  public deleteUsere(id: number): Observable<unknown> {

    const url: string = `${this.userUrl}/${id}`;

    return this.http.delete(url, this.httpOptions)
      .pipe(catchError(this.handleError('deleteUser')));
  }
}
