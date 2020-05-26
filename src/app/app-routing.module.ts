import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    JobListComponent,
    JobDescriptionComponent,
    CandidateListComponent,
} from "./pages";

const routes: Routes = [
    {
        path: "",
        component: JobListComponent,
    },
    {
        path: "job",
        children: [
            {
                path: "**",
                component: JobDescriptionComponent,
            },
        ],
    },
    {
        path: "candidates",
        component: CandidateListComponent,
    },
    {
        path: "**",
        redirectTo: "/",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
