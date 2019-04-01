import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links: Link[];

  constructor(private linkService: LinkService) { }

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

  ngOnInit() {
    this.getLinks();
  }

}
