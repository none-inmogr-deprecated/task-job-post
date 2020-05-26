import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services";
import { ICandidateItem } from "../../models";

@Component({
    selector: "app-candidate-list",
    templateUrl: "./candidate-list.component.html",
    styleUrls: ["./candidate-list.component.scss"],
})
export class CandidateListComponent implements OnInit {
    colLabels = ["Job ID", "Name", "Email", "Mobile"];
    colIds = ["jobId", "name", "email", "mobile"];
    dataSource: ICandidateItem[] = [];

    constructor(public backend: BackendService) {}

    ngOnInit(): void {
        this.dataSource = this.backend.getCandidateList();
    }
}
