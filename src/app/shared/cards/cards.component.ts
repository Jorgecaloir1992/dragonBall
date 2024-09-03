import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() data : any
  @Output() select = new EventEmitter<any>();

  onSelected(){
    this.select.emit(this.data)
  }

}
