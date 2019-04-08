import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Link } from '../models/link';
import { Observable } from 'rxjs';

@Component({
  selector: 'link-update',
  templateUrl: './link-update.component.html',
  styleUrls: ['./link-update.component.scss']
})
export class LinkUpdateComponent implements OnInit {
  linkUpdateForm: FormGroup;

  @Input() link: Link;

  @Output() updateLink: EventEmitter<Link> = new EventEmitter<Link>();

  // ViewChild not working, ViewChildren working, why ?
  //@ViewChildren('linkUpdate') linkUpdateComponent: LinkUpdateComponent;

  constructor(private fb: FormBuilder) { }

  update() {
    if(this.linkUpdateForm.valid) {
      this.linkUpdateForm.patchValue({'id': this.link.id});
      this.link = Object.assign({}, this.link, this.linkUpdateForm.value);
      this.updateLink.emit(this.link);
    }
  } 

  ngOnInit() {
    this.createForm();
  }

  ngAfterVie

  private createForm():void {
    this.linkUpdateForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      description: [''],
      chapter: ['']
    });
    this.linkUpdateForm.patchValue(this.link);
  }

}