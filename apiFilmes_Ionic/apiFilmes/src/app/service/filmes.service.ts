import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TiposDeBusca {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'c71b78a6';

  constructor(private http: HttpClient) { }

  buscarFilmes(titulo: string, type: TiposDeBusca): Observable<any> {
    console.log(titulo);
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apikey=${this.apiKey}`);
  }

  pegarDetalhes(id:any) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
