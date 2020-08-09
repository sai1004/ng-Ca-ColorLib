import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    data: any[] = [
        {
            icon: 'identity.svg',
            title: 'Awesome Experience',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            icon: 'speed.svg',
            title: 'Fast and Simple ',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            icon: 'code.svg',
            title: 'Clean Code ',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            icon: 'design.svg',
            title: 'Perfect Design ',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            icon: 'corporate.svg',
            title: 'Best Industry Leader',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            icon: 'support.svg',
            title: '24/7 Online Support',
            description: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
        },
    ];
}
