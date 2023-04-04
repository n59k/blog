import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {format, parseISO} from "date-fns";
import {Observable} from "rxjs";
import {ContentfulService} from "../services/contentful.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() pages: { name: string, link: string }[] = [
    { name: 'Home', link: '/home' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contacts', link: '/contacts' },
  ];
  constructor(private contentfulServise: ContentfulService){
  }

  persons$ : Observable<any> | undefined;
  async ngOnInit(): Promise<void> {
    this.persons$ = this.contentfulServise.getEntriesByContentType('persons');

  }
}
