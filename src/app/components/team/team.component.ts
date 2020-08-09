import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    data: any[] = [
        {
            name: 'Jackson Nash',
            img: '../../../assets/team-img/team-1.jpg',
            designation: 'Tax Advice',
        },
        {
            name: 'Alex Manning',
            img: '../../../assets/team-img/team-2.jpg',
            designation: 'CEO-Founder',
        },
        {
            name: 'Ollie Schneider',
            img: '../../../assets/team-img/team-3.jpg',
            designation: 'Business Planner',
        },
        {
            name: 'Roger West',
            img: '../../../assets/team-img/team-4.jpg',
            designation: 'Financer',
        },
    ];
}
