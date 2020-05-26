import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
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

import { AppConfigService } from "./services";

import { NavHeaderComponent } from "./components";

@NgModule(
    {
        declarations: [
            AppComponent,
            NavHeaderComponent,
        ],
        imports: [
            BrowserModule,
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
