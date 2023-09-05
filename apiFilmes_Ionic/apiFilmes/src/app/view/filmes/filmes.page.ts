import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilmesService ,TiposDeBusca } from 'src/app/service/filmes.service';



@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  resultados!: Observable<any>;
  termosBusca: string = '';
  tipo!:TiposDeBusca.all;

  constructor(private filmeService: FilmesService) { }

  ngOnInit() {
  }
 
  busca() {
    console.log(this.termosBusca);
    this.resultados = this.filmeService.buscarFilmes(this.termosBusca, this.tipo)
    .pipe(
      map(results => results ['Search'])
    );
    console.log(this.resultados);
  }

}
