import { Component } from "@angular/core";
import { CharacterCardComponent } from "../character-card/character-card.component";

@Component({
    standalone: true,
    selector: 'app-rick-and-morty',
    templateUrl: 'rick-and-morty.component.html',
    styleUrls: ['rick-and-morty.component.scss'],
    imports: [CharacterCardComponent]
})

export class RickAndMortyComponent{

}