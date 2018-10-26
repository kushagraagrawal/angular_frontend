import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [CardsComponent],
  exports: [
    CardsComponent
  ]
})
export class BodyModule {



 }
