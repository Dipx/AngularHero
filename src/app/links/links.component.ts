import { Component, OnInit, ViewChild } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/Links/link.service';
import { Location } from '@angular/common';
import { LinkUpdateComponent } from '../link-update/link-update.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  editing: boolean = false;
  links: Link[];

  linkUpdateFormGroup: FormGroup;

  @ViewChild(LinkUpdateComponent)
    set linkUpdate(component: LinkUpdateComponent){
      if(!!component && typeof component !== "undefined") {
        console.log("viewchild");
        this.linkUpdateFormGroup = component.linkUpdateForm;
      }
    }

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
    console.log("init");
    this.getLinks();
  }
}
