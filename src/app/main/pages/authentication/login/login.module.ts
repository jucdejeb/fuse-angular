import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LaddaModule } from 'angular2-ladda';
import { FuseSharedModule } from '@fuse/shared.module';

import { LoginComponent } from 'app/main/pages/authentication/login/login.component';

const routes = [
    {
        path     : 'auth/login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        LaddaModule
    ]
})
export class LoginModule
{
}
