import { Component, OnInit } from '@angular/core';

// SERVICES
import { MessageService } from "../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
