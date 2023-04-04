import {Component, Input, OnInit} from '@angular/core';
import {ContentfulService} from "../services/contentful.service";
import {Entry} from "contentful";
import {Observable} from "rxjs";
import {format, parseISO} from "date-fns";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  @Input() pages: { name: string, link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contacts', link: '/contacts' },
  ];
  constructor(private contentfulServise: ContentfulService){

  }

  blogPosts$: Entry<any>[] | undefined = [];
  persons$ : Observable<any> | undefined;


  async ngOnInit(): Promise<void> {
    this.persons$ = this.contentfulServise.getEntriesByContentType('persons');

    const entries = await this.contentfulServise.getEntriesByContentType('blogPost').toPromise();
    this.blogPosts$ = entries;

    if (this.blogPosts$) {
      this.blogPosts$.forEach((post) => {
        const date = parseISO(post.fields.updatedDate);
        post.fields.updatedDate = format(date, 'dd MMMM yyyy hh:mm');
      });
    }

  }
}
