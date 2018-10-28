import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FuseDirectivesModule } from '@fuse/directives/directives';
import { FusePipesModule } from '@fuse/pipes/pipes.module';
import { 
        MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule 
    } from '@angular/material';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule, 

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,

        MatInputModule,
		MatNativeDateModule,
        MatDatepickerModule,
        MatSnackBarModule
    ]
})
export class FuseSharedModule
{
}