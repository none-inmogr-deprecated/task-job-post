import { Component, OnInit, Inject, Optional } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BackendService } from "../../services";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IJobItem } from "../../models";

@Component({
    selector: "app-job-application",
    templateUrl: "./job-application.component.html",
    styleUrls: ["./job-application.component.scss"],
})
export class JobApplicationComponent implements OnInit {
    application = new FormGroup({
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        mobile: new FormControl("", [Validators.required]),
    });

    constructor(
        public backend: BackendService,
        public dialogRef: MatDialogRef<JobApplicationComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: IJobItem,
    ) {}

    ngOnInit(): void {}

    onSubmit(): void {
        this.backend.markApplied(this.data.id);
    }
}
