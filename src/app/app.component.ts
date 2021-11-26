import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cookie-handling';

  private cookieValue: string | undefined;
  
  constructor (private cookieService: CookieService) {}
  
  public ngOnInit(): void {
    this.cookieService.set('_ga', 'GA1.2.1314226043.1632748813', 30, '/', 'localhost',);
    this.cookieValue = this.cookieService.get('_ga');
  }
}
