import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AppConfigService {
    public isNavSideBar = false;
    public route = "/";

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.route = event.url;
            }
        });
    }

    public toggleSideBar() {
        this.isNavSideBar = !this.isNavSideBar;
    }
}
