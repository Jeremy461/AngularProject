import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ISong } from './song';
import { Observable } from 'rxjs/observable';
import { Router }  from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Injectable()
export class SongService {
    
    private _songUrl = 'http://145.24.222.211:8000/api/songs'
    
    constructor(private _http: Http, private _router: Router){
        
    }
    
    getSongs(): Observable<ISong[]>{
        console.log("song service getSongs");
        return this._http.get(this._songUrl)
            .map((response: Response) => <ISong[]> response.json().items)
            .catch(this.handleError);
    }
    
    getSong(id: string): Observable<ISong> {
        console.log("song service GetSong");
        return this.getSongs()
            .map((songs: ISong[]) => songs.find(s => s._id === id));
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    editSong(): void {
        
    }
    
    deleteSong(songId: string):Observable<Response> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        const url = `${this._songUrl}/${songId}`;

        return this._http.delete(url, options)
        .do(data => console.log('deleteTrack: ' + JSON.stringify(data)))
        .finally(() => this._router.navigate(['/songs']))
        .catch(this.handleError);
    }
}