import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Link } from '../models/link';

@Component({
  selector: 'link-update',
  templateUrl: './link-update.component.html',
  styleUrls: ['./link-update.component.scss']
})
export class LinkUpdateComponent implements OnInit {
  linkForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    url: new FormControl(),
    description: new FormControl(),
    chapter: new FormControl()
  });

  @Input() link: Link;

  @Output() updateLink: EventEmitter<Link> = new EventEmitter<Link>();

  constructor(private fb: FormBuilder) { }

  update() {
    if(this.linkForm.valid) {
      this.linkForm.patchValue({'id': this.link.id});
      this.link = Object.assign({}, this.link, this.linkForm.value);
      this.updateLink.emit(this.link);
    }
  }

  ngOnInit() {
    this.linkForm.patchValue(this.link);
  }

}
