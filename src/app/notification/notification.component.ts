import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OlympicService } from '../core/services/olympic.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notification$!: Observable<string>;

  constructor(private olympicServices: OlympicService) { }

  ngOnInit(): void {
    this.notification$ = this.olympicServices.notification$
  }

}
