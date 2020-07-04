import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  imgUrl: string = '../../../assets/welcome-img.png';

  email: string;
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.email)
  }
}
