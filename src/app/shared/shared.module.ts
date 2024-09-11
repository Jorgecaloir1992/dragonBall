import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    ModalComponent,
    CardsComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [
    ModalComponent,
    CardsComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
