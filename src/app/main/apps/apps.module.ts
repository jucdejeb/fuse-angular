import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { UrlRoute } from '@fuse/common/Routes';

const routes = [
    {
        path: UrlRoute.dashboard,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule {
}
