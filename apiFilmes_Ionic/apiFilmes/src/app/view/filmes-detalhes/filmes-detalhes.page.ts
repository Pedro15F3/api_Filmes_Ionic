import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/service/filmes.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {

  informacao: any;
  constructor(private activatedRoute: ActivatedRoute, private _filmesService: FilmesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
     this._filmesService.pegarDetalhes(id).subscribe(result => {
      this.informacao = result;
    });
  }

  abrirSite() {
    window.open(this.informacao.Website, '_blank');
  }
}

