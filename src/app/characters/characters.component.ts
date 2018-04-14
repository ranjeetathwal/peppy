import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters-service.service';
import { Character } from './character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  private characters = [];

  constructor(private _characterService: CharactersService) { }

  ngOnInit() {
    this._characterService.getCharacters()
                        .subscribe(retCharacters => this.characters = retCharacters);
  }
}
