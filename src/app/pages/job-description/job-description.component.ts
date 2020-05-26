import { Component, OnInit } from "@angular/core";
import { IJobItem } from "../../models";
import { BackendService, AppConfigService } from "../../services";

@Component({
    selector: "app-job-description",
    templateUrl: "./job-description.component.html",
    styleUrls: ["./job-description.component.scss"],
})
export class JobDescriptionComponent implements OnInit {
    data: IJobItem;

    constructor(public appConfig: AppConfigService, public backend: BackendService) {}

    ngOnInit(): void {
        const jobs = this.backend.getJobList();
        const route = this.appConfig.route.split("/");
        const id = +route[route.length - 1];
        this.data = jobs.find((item) => item.id === id);
    }
}
