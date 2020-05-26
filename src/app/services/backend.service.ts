import { Injectable } from "@angular/core";
import { NavHeaderData, JobListData } from "../mocks";

@Injectable({
    providedIn: "root",
})
export class BackendService {
    getAvatar() {
        return NavHeaderData.avatar;
    }

    getJobList() {
        return JobListData;
    }
}
