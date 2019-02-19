import {Component, OnInit} from '@angular/core';
import {CurrentUser} from '../../currentUser';
import {User} from '../../models/User.class';
import {Customer} from '../../models/Customer.class';
import {ContactUsService} from '../../services/contactUs.service';
import {MailboxMessage} from '../../models/MailboxMessage.class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  message: MailboxMessage;

  constructor(public currentUser: CurrentUser,
              public contact_service: ContactUsService) {
    this.message = new MailboxMessage();
    const user: User = this.currentUser.get() || new Customer();
    this.message.FromName = (user.FirstName ? user.FirstName + ' ' : '') + user.LastName || '';
    this.message.FromEmail = user.Email;
    this.message.Mobile = user.MobilePhone;

  }

  ngOnInit() {

    console.log(this.currentUser);
  }

  async validateMe() {
    if (!(this.message.FromEmail && this.message.FromName && this.message.Topic && this.message.Content && this.message.Mobile)) {
      return false;
    }
    const mess = {...this.message};
    mess.Content = mess.Content + 'מספר טלפון להתקשרות חוזרת  ' + mess.Mobile;
    await this.contact_service.sendMailToAdmin(mess).subscribe();
  }
}
