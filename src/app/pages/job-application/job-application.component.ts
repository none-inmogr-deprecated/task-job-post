import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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

    constructor() {}

    ngOnInit(): void {}

    onSubmit(): void {
        // this.application.controls.name
    }
}
