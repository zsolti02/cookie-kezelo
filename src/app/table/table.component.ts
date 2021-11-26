import { Component, NgModule, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class TableComponent implements OnInit {
  cookie_name: string = 'last_viewed_list';
  cookie_service: string = 'Extreme Digital';
  cookie_target: string = 'Utoljára megtekintett termékek listáját tárolja, hogy a látogató számára látható legyen az oldalon mit nézett meg korábban.';
  cookie_expirity: string = '30 days';
  cookie_type: string = 'HTTP';

 public accept = new BehaviorSubject<boolean>(this.cookieService.get('hasAccepted') === 'true');

 get hasAccepted() {
  return this.accept.asObservable();
 }

 constructor(
 private router: Router, private http: HttpClient, private cookieService: CookieService
) { }

 ngOnInit(): void {
 }
}
