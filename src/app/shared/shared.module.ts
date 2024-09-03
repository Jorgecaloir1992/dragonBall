import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ModalComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [
    ModalComponent,
    CardsComponent,
    FooterComponent
  ]
})
export class SharedModule { }
