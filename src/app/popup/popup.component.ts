import { Component, NgModule, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class PopupComponent implements OnInit {
  title: string = 'We use cookies to provide you with content and social features, to analyse our website traffic and for advertising purposes to ensure a comfortable browsing experience. On the  website you can view our Privacy Notice and a detailed description of how we use cookies. You can change your cookie settings at any time by clicking on the Cookie Management Settings in the footer.';
  
  public accept = new BehaviorSubject<boolean>(this.cookieService.get('hasAccepted') === 'true');
  
  get hasAccepted() {
    return this.accept.asObservable();
  }

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService
    ) { }

  ngOnInit(): void {
  }

}
