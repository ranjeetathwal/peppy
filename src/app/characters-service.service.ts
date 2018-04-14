import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  private url: string = "/api-data/characters.json"

  constructor(private _http: Http) { }

  getCharacters() {
    return this._http.get(this.url)
                    .map((response: Response) => response.json());
  }

}
