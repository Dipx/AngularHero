import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/link.service';
import { pipe } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  editing: boolean = false;
  links: Link[];

  constructor(
    private linkService: LinkService,
    private location: Location
    ) { }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe((data: Link[]) => this.links = data)
  }

  handleAdd(link: Link): void {
    this.linkService.addLink(link)
      .subscribe((data: Link) => this.links.push(data));
  }

  deleteLink(event: Link): void {
    this.linkService.deleteLink(event)
      .subscribe(() => {
        this.links = this.links.filter((link: Link) => {
          return link.id !== event.id;
        })
      });
  }

  updateLink(link: Link) {
    this.linkService.updateLink(link)
    .subscribe(() => {
        this.getLinks();
    });
  }

  toggleUpdateLink(link: Link) {
    if(!link.editing) {
      link.editing = true;
    }
    else link.editing = !link.editing;
  }

  ngOnInit() {
    this.getLinks();
  }

}
