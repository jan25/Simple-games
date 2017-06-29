import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CustomImportsModule} from './custom-imports.module';

import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';


@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomImportsModule
  ],
  providers: [],
  bootstrap: [TicTacToeComponent]
})
export class AppModule { }
