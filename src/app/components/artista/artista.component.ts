import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any  = {};
  loading: boolean;
  topTracks: any [] = [];
  error: boolean;

  constructor(private router: ActivatedRoute,
              private spoti: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });   }

    getArtista = ( id: string) => {
    this.loading = true;
    this.spoti.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
    }
   getTopTracks = ( id: string) => {
     this.spoti.getTopTracks(id).subscribe(topTracks => {
       console.log(topTracks);
       this.topTracks = topTracks;
     });

    }
}
