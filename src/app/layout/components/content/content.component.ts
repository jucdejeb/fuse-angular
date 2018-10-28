import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../main/pages/authentication/auth/auth-service.service';
import { Router } from '@angular/router';
import { UrlRoute } from '@fuse/common/Routes';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
    /**
     * Constructor
     */
    constructor() {
    }

}
