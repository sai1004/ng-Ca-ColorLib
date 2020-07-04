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
      icon: '',
      title: 'Awesome Experience',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      icon: '',
      title: 'Fast and Simple ',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      icon: '',
      title: 'Clean Code ',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      icon: '',
      title: 'Perfect Design ',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      icon: '',
      title: 'Best Industry Leader ',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      icon: '',
      title: '24/7 Online Support',
      description:
        'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit anim id est laborum. ',
    },
  ];
}
