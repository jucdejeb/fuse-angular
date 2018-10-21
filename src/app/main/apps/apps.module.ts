import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path        : 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule
{
}
