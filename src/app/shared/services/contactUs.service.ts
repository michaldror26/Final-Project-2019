import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MailboxMessage} from '../models/MailboxMessage.class';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ROOT_URL} from '../config';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(public httpClient: HttpClient) {
  }

  sendMailToAdmin(message: MailboxMessage): Observable<MailboxMessage> {
    const url = ROOT_URL +  'contactUs/sendMailToAdmin';

    return this.httpClient.post<MailboxMessage>(url, message)
      .pipe(
        map(
          data => {
            debugger
            return data;
          },
          error => {
            debugger
          }
        ));
  }


}
