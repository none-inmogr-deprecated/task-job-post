import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobListComponent } from "./pages";

const routes: Routes = [
    {
        path: "",
        component: JobListComponent,
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
