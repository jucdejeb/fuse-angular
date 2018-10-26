import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

// Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { APP_BASE_HREF } from '@angular/common';

import { CONFIG } from 'environments/environment';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { AuthGuard } from './main/pages/authentication/auth/auth-guard.service';
import { AuthService } from './main/pages/authentication/auth/auth-service.service';

const appRoutes: Routes = [
    {
        path: 'apps',
        canActivate: [AuthGuard],
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path: 'ui',
        canActivate: [AuthGuard],
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path: 'documentation',
        canActivate: [AuthGuard],
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path: 'angular-material-elements',
        canActivate: [AuthGuard],
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

export const firebaseConfig: FirebaseAppConfig = CONFIG.firebaseConfig;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // firebase

        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthGuard, AuthService
    ]
})
export class AppModule {
}
