import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
    contact: Contact;

    constructor() {
        this.contact = new Contact();
    }

    ngOnInit(): void {}

    onSend() {}
}
