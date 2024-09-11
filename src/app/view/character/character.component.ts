import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
	selector: 'app-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

	characters: any = [];
	filter: any
	selectedCard: any = null;
	show: boolean = false;
	isLoading: boolean = false;

	constructor(private servicesCharacter: ServicesService) { }

	ngOnInit(): void {
		this.getCharacter()
		this.onSearch
	}

	getCharacter() {
		this.loading()
		this.servicesCharacter.Character().subscribe((data: any) => {
			console.log(data.meta, "aqui buscando resultados")
			this.characters = data.items
			this.filter = [...data.items]
		})
	}

	onSearch(event: any) {
		const searchData = event.target.value.toLowerCase();
		this.filter = this.characters.filter((data: any) => data.name.toLowerCase().startsWith(searchData));
	}

	onSelected(item: any) {
		this.selectedCard = item
		this.show = true
		console.log(this.selectedCard, " elemento seleccionado")
		console.log(this.show)
	}

	loading(){
		this.isLoading = true;
		setTimeout(() => {
		  this.isLoading = false;
		}, 2000);
	  }
}
