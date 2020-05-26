import { Injectable } from "@angular/core";
import { NavHeaderData, JobListData, CandidateList } from "../mocks";

@Injectable({
    providedIn: "root",
})
export class BackendService {
    getAvatar() {
        return NavHeaderData.avatar;
    }

    getCandidateList() {
        return CandidateList;
    }

    getJobList() {
        return JobListData;
    }

    markApplied(id: number) {
        const index = JobListData.findIndex((item) => item.id === id);
        if (index === -1) {
            return false;
        }
        JobListData[index].applied = true;
        return true;
    }
}
