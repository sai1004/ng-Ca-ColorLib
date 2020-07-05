import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menus: any[] = [
    {
      name: 'home',
      icon: 'home',
    },
    {
      name: 'about',
      icon: 'about',
    },
    {
      name: 'features',
      icon: 'features',
    },
    {
      name: 'screen shot',
      icon: 'screen',
    },
    {
      name: 'pricing',
      icon: 'pricing',
    },
    {
      name: 'testimonials',
      icon: 'testimonials',
    },
    {
      name: 'team',
      icon: 'contact_support',
    },
    {
      name: 'contact',
      icon: 'contact_support',
    },
  ];
}
