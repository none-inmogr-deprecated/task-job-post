import { Injectable } from "@angular/core";
import { NavHeaderData } from "../mocks";

@Injectable({
    providedIn: "root",
})
export class BackendService {
    getAvatar() {
        return NavHeaderData.avatar;
    }
}
