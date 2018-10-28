import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule, MatCardModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { LaddaModule } from 'angular2-ladda';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { ProfileTimelineComponent } from './tabs/timeline/timeline.component';
import { ProfileAboutComponent } from './tabs/about/about.component';
import { ProfilePhotosVideosComponent } from './tabs/photos-videos/photos-videos.component';
import { LoginService } from '../../pages/authentication/login/login.service';


const routes = [
    {
        path     : '**',
        component: ProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        ProfilePhotosVideosComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,

        FuseSharedModule,
		LaddaModule
    ],
    providers   : [
        ProfileService,
        LoginService
    ]
})
export class ProfileModule
{
}
