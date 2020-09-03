import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDfSSEKO8oQWjvaAY2pyDyblksNkmnupxya1JC80BT9m9-BfPxN1LIty5A78tt4Lg4HY2B3Y3Y6_g9mBS0'
    });

    return this.http.get( url , { headers });
  }

  getNewReleases = () => {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQDgTiOAaCG2fd87qU_vgsnSuc0yOzI0fpLTxU6j_bXpx-FgNG7__zHsgDQ_cPVJBFlBB_ATZJCqClYWSFE',
    // });
    return this.getQuery('browse/new-releases')
    .pipe(map( data => data['albums'].items));
    // return this.http
    //   .get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe(map((data) => data['albums'].items));
  }

  getArtistas = (termino: string) => {

    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=5&limit=25`)
    .pipe(map((data) => data['artists'].items));
  }
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQDb-IaWA_8TopiP_SJSzv-cyPOLeEjfNH1b8DCpZhkFv4EXbw-7M397mIQXAnIZA9HpRyA6chBXG0WyKdQ',
    // });
    // return this.http
    //   .get(
    //     `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=5&limit=25`,
    //     { headers }
    //   )
    //   .pipe(map((data) => data['artists'].items));
    getArtista = (id: string) => {

      return this.getQuery(`artists/${ id }`);
      // .pipe(map((data) => data['artists'].items));
    }
    getTopTracks = (id: string) => {

      return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe(map((data) => data['tracks']));
    }

    getTracks =( track: string) => {
    }
  }

