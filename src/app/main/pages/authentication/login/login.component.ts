import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth-service.service';
import { UserModel } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {

    isFormSubmit = false;

    loginForm: FormGroup;
    loginError = false;

    UserData: UserModel = new UserModel({});

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private loginService: LoginService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        if (authService.isLoggedIn()) {
            this.router.navigate(['apps/dashboards/analytics']);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    loginEmail() {
        this.isFormSubmit = true;

        const data = this.loginForm.value;

        this.authService.signInWithEmail(data.email, data.password)
            .then((res) => {
                this.isFormSubmit = false;
                this.UserData = new UserModel(res.user);
                console.log(this.UserData);
                this.isFormSubmit = false;
                this.loginService.loadUserProfile(this.UserData).subscribe(res => {
                    this.UserData = new UserModel(res);;
                })
                localStorage.setItem('userDetail', JSON.stringify(res));

                this.redirectToDashboard();
            })
            .catch((err) => {
                this.isFormSubmit = false;
                this.loginError = true;
            });
    }

    redirectToDashboard() {
        setTimeout(() => {
            this.router.navigate(['apps/dashboards/analytics']);
        }, 1500);
    }
}
