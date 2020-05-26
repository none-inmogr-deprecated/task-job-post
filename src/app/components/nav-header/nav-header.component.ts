import { Component, OnInit } from "@angular/core";
import { AppConfigService, BackendService } from "../../services";

@Component({
    selector: "app-nav-header",
    templateUrl: "./nav-header.component.html",
    styleUrls: ["./nav-header.component.scss"],
})
export class NavHeaderComponent implements OnInit {
    public avatar = "";
    constructor(public appConfig: AppConfigService, public backend: BackendService) {}

    ngOnInit(): void {
        this.avatar = this.backend.getAvatar();
    }
}
