import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Http, Headers, Response } from '@angular/http';

import { ISong } from './song';
import { SongService } from './song.service';
import 'rxjs/add/operator/finally';

@Component({
    templateUrl: 'app/songs/song-detail.component.html'
})

export class SongDetailComponent implements OnInit {
    pageTitle: string = 'Song Detail';
    song: any;
    errorMessage: string;
    sub: Subscription;
    edit: boolean = false;
    
    formData: Object;
    title: string;
    artist: string;
    genre: string;
    private _songUrl = 'http://145.24.222.211:8000/api/songs/';
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _songService: SongService,
                private http: Http){
        
    }
    
    ngOnInit():void{
        console.log("song detail OnInit");
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                console.log(id);
                this.getSong(id);
            });
    }
    
    getSong(id: string) {
        console.log("song detail getSong");
        this._songService.getSong(id).subscribe(
            song => this.song = song,
            error => this.errorMessage = <any>error);
    }
    
    onBack(): void{
        this._router.navigate(['/songs']);
    }
    
    deleteSong():void{
        this._songService.deleteSong(this.song._id).subscribe(
            (error: any) => this.errorMessage = <any>error
        );
    }
    
    editSong():void{
        this.edit = true;
    }
    
    saveSong() {
        console.log(this.artist);
        
        this.formData = {
            "title": this.title,
            "artist": this.artist,
            "genre": this.genre
        }
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(this._songUrl + this.song._id, this.formData, headers)
        .finally(() => this._router.navigate(['/songs']))
                .subscribe(
            (res: any) => {
                this.song.push(JSON.parse(res._body))
                console.log("Edit successfull")
            },
            error => this.errorMessage = <any>error
            );
    }
    
}