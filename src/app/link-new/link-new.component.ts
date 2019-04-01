import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Link } from '../models/link';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'link-new',
  templateUrl: './link-new.component.html',
  styleUrls: ['./link-new.component.scss']
})
export class LinkNewComponent implements OnInit {
  adding: Boolean = false;

  model: Link = new Link();

  @Output()
  addLink: EventEmitter<Link> = new EventEmitter<Link>();

  constructor() { }

  toggleAdd() {
    this.adding = !this.adding;
  }

  handleSubmit(link: Link, isValid: boolean) {
    if(isValid) {
      this.addLink.emit(link);
      this.adding = false;
      this.model = new Link();
    }
  }

  ngOnInit() {
  }

}
