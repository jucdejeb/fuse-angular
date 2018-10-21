import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { AuthService } from './authentication/auth/auth-service.service';
import { AuthGuard } from './authentication/auth/auth-guard.service';

@NgModule({
    imports: [
        LoginModule,
        ForgotPasswordModule
    ],
    providers: [
        AuthGuard, AuthService
    ]
})
export class PagesModule { }
