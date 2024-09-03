import { BoundElementProperty } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() show: Boolean = false;
  @Input() selectedCard : any;

  closeModal(){
    this.show = false;
  }

}
