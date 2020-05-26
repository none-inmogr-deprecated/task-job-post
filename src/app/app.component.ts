import { Component, ViewChild } from "@angular/core";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";
import { AppConfigService } from "./services";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    @ViewChild(PerfectScrollbarDirective)
    scrollRef!: PerfectScrollbarDirective;

    constructor(private appConfig: AppConfigService) {
        this.appConfig.scrollRef = this.scrollRef;
    }
}
