import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobListComponent, JobDescriptionComponent } from "./pages";

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
        path: "**",
        redirectTo: "/",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
