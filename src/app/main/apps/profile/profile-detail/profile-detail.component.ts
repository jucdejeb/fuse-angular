import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'fuse-profile-detail',
    templateUrl: './profile-detail.component.html',
    styleUrls: ['./profile-detail.component.scss'],
    animations: fuseAnimations
})
export class ProfileDetailComponent implements OnInit {

    constructor() {
        console.log('AdFADF');
     }

    ngOnInit() { }

}

