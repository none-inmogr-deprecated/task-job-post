import { Component, OnInit } from "@angular/core";
import { IJobItem } from "../../models";
import { BackendService, AppConfigService } from "../../services";
import { MatDialog } from "@angular/material/dialog";
import { JobApplicationComponent } from "../job-application/job-application.component";

@Component({
    selector: "app-job-description",
    templateUrl: "./job-description.component.html",
    styleUrls: ["./job-description.component.scss"],
})
export class JobDescriptionComponent implements OnInit {
    data: IJobItem;

    constructor(public appConfig: AppConfigService, public backend: BackendService, public dialog: MatDialog) {}

    ngOnInit(): void {
        const jobs = this.backend.getJobList();
        const route = this.appConfig.route.split("/");
        const id = +route[route.length - 1];
        this.data = jobs.find((item) => item.id === id);
    }

    openDialogApplication(): void {
        const dialogRef = this.dialog.open(JobApplicationComponent, { panelClass: "w-50" });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
