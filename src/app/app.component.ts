import { Component } from "@angular/core";
import {Router, NavigationEnd} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "project-name";
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {
    router.events.subscribe((data: any) => {
      if (data instanceof NavigationEnd && router.url.startsWith("/app")) {
        this.authenticationService.getSession().subscribe(() => {});
      }
    });
  }
}
