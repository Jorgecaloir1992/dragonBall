import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from 'src/app/services/services.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [CharacterComponent],
  providers: [ServicesService]
})
export class CharacterModule { }
