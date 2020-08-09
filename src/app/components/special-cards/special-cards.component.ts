import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-special-cards',
    templateUrl: './special-cards.component.html',
    styleUrls: ['./special-cards.component.scss'],
})
export class SpecialCardsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    data: any[] = [
        {
            icon: 'phone_android',
            title: 'Easy to use ',
            description: 'We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily ',
        },
        {
            icon: 'view_quilt',
            title: 'Powerful Design ',
            description: 'We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily ',
        },
        {
            icon: 'settings',
            title: 'Customizability',
            description: 'We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily ',
        },
    ];
}
