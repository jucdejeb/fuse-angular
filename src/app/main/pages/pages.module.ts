import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';

@NgModule({
    imports: [
        LoginModule,
        ForgotPasswordModule
    ]
})
export class PagesModule { }
