import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentfulService} from "../services/contentful.service";
import {Observable} from "rxjs";
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{

  @Input() pages: { name: string, link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contacts', link: '/contacts' }
  ];

  constructor(private route: ActivatedRoute, private contentfulServise: ContentfulService) {}

  blogPost$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.blogPost$ = this.contentfulServise.getEntryById(id);
      }
    );

    if (this.blogPost$) {
      this.blogPost$.forEach((post) => {
        const date = parseISO(post.fields.updatedDate);
        post.fields.updatedDate = format(date, 'dd MMMM yyyy hh:mm');
      });
    }

  }

}

