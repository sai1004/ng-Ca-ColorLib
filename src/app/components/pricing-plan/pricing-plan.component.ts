import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss'],
})
export class PricingPlanComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  data: any[] = [
    {
      title: 'Starter Plan',
      price: 50,
      list: [

        "users: 10",
        'updates: limited',
        'host: Hidden Charges',
        'support: 5hr per day',
        'unique: 2',

      ],
    },
    {
      title: 'Starter Plan',
      price: 50,

      list: [
        "users: 10",
        'updates: limited',
        'host: Hidden Charges',
        'support: 5hr per day',
        'unique: 2',
      ],
    },
    {
      title: 'Starter Plan',
      price: 50,
      list: [
        "users: 10",
        'updates: limited',
        'host: Hidden Charges',
        'support: 5hr per day',
        'unique: 2',
      ],
    },
    {
      title: 'Starter Plan',
      price: 50,
      list: [
        "users: 10",
        'updates: limited',
        'host: Hidden Charges',
        'support: 5hr per day',
        'unique: 2',
      ],
    },
  ];
}
