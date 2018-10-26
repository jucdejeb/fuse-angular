import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { LaddaModule } from 'angular2-ladda';
import { LoginComponent } from 'app/main/pages/authentication/login/login.component';
import { LoginService } from './login.service';

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
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule
{
}
