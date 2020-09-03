import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any [] = [];
  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private http: HttpClient,
               private spoti: SpotifyService) {
       this.loading = true;
       this.error = false;
       this.spoti.getNewReleases()
       .subscribe( (data: any) => {
         this.nuevasCanciones = data;
      
       }, (errorServicio => {
           this.loading = false;
           this.error = true;
           this.mensajeError = errorServicio.error.error.message;
       }));
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) => {
    //    this.paises = resp;
    //    } );
   }



  ngOnInit(): void {
  }

}
