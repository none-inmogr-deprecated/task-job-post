import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services";
import { IJobItem } from "../../models";

@Component({
    selector: "app-job-list",
    templateUrl: "./job-list.component.html",
    styleUrls: ["./job-list.component.scss"],
})
export class JobListComponent implements OnInit {
    items: IJobItem[] = [];

    constructor(public backend: BackendService) {}

    ngOnInit(): void {
        // NOTE in real life we have pagination
        this.items = this.backend.getJobList();
    }
}
