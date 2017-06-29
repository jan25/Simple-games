import { NgModule } from '@angular/core';

import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

@NgModule({

imports: [MdCardModule, MdGridListModule, MdButtonModule,
    MdIconModule, MdToolbarModule, MdTooltipModule],
exports: [MdCardModule, MdGridListModule, MdButtonModule,
    MdIconModule, MdToolbarModule, MdTooltipModule]

})

export class CustomImportsModule { }