import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
};

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppConfigService } from "./services";

import { NavHeaderComponent } from "./components";

import {
    JobListComponent,
    JobDescriptionComponent,
    JobApplicationComponent,
    CandidateListComponent,
} from "./pages";

@NgModule(
    {
        declarations: [
            AppComponent,
            NavHeaderComponent,
            JobListComponent,
            JobDescriptionComponent,
            JobApplicationComponent,
            CandidateListComponent,
        ],
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            ServiceWorkerModule.register(
                "ngsw-worker.js",
                {
                    enabled:
                        environment.production,
                },
            ),
            PerfectScrollbarModule,

            MatButtonModule,
            MatIconModule,
            MatListModule,
            MatMenuModule,
            MatToolbarModule,
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
        ],
        providers: [
            {
                provide: PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            },
            AppConfigService,
        ],
        bootstrap: [
            AppComponent,
        ],
    },
)
export class AppModule {}
