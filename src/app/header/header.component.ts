import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

  @Input() pages: { name: string, link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contacts', link: '/contacts' },
  ];

  @Input() activePage: string = '';

  constructor() {
  }



}
