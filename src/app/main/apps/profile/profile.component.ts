import { Component, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GlobalConstants } from '@fuse/common/commpon.data';
import { MatSnackBar } from '@angular/material';
import { UserModel } from '../../pages/authentication/login/login.model';
import { LoginService } from '../../pages/authentication/login/login.service';
import { UrlRoute } from '@fuse/common/Routes';
import { Router } from '@angular/router';
import { AuthService } from '../../pages/authentication/auth/auth-service.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent {

    UserData: UserModel = new UserModel({});
    userForm: FormGroup;

    isFormSubmit = false;

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        private matSnackBar: MatSnackBar,
        private authService: AuthService,
        private router: Router
    ) {
        if (this.authService.isLoggedIn() === false) {
            const url = UrlRoute.pages + '/' + UrlRoute.auth + '/' + UrlRoute.login
            this.router.navigate([url]);
        } else {
            this.UserData = JSON.parse(localStorage.getItem(GlobalConstants.LocalStorage.UserData));
            this.buildForm();
        }
    }

    ngOnInit() {
        this.loadUserData();
    }

    buildForm() {
        this.userForm = this.fb.group({
            uid: [this.UserData.uid],
            firstName: [this.UserData.firstName],
            middleName: [this.UserData.middleName],
            lastName: [this.UserData.lastName],
            nickName: [this.UserData.nickName],
            email: [this.UserData.email],
            phoneNumber: [this.UserData.phoneNumber],
            dateOfBirth: [this.UserData.dateOfBirth],
            date: [this.UserData.date],
            emergencyContact: [this.UserData.emergencyContact],
            streetAddress: [this.UserData.streetAddress],
            city: [this.UserData.city],
            state: [this.UserData.state],
            zipCode: [this.UserData.zipCode],
        });
        if (this.UserData.dateOfBirth !== null && this.UserData.dateOfBirth !== undefined) {
            this.userForm.controls['date'].setValue(new Date(this.UserData.dateOfBirth));
        }
    }

    loadUserData() {
        this.loginService.loadUserProfile(this.UserData).subscribe(res => {
            this.UserData = new UserModel(res);
            this.buildForm();
        })
    }

    onSubmit() {
        this.isFormSubmit = true;
        const data: UserModel = this.userForm.value;

        data.dateOfBirth = data.date.getTime();

        this.loginService.saveUserProfile(data);
        localStorage.setItem(GlobalConstants.LocalStorage.UserData, JSON.stringify(this.UserData));
        this.matSnackBar.open("User Profile Data Save Successfully", '', {
            duration: 2000,
        });
        this.isFormSubmit = false;
    }


}
