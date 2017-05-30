import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Http, Headers, Response } from '@angular/http';

import { ISong } from './song';
import { SongService } from './song.service';
import 'rxjs/add/operator/finally';


@Component({
    moduleId: module.id,
    templateUrl: 'song-list.component.html',
    styleUrls: ['song-list.component.css']
})

export class SongListComponent implements OnInit {
    private _songUrl: string = 'http://145.24.222.211:8000/api/songs/';
    
    pageTitle: string = 'Song List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    songs: ISong[] = [];
    song: any;
    newSong: boolean = false;
    
    formData: Object;
    title: string;
    artist: string;
    genre: string;
    
    
    constructor(private _songService: SongService, private _http: Http){
        
    }
   
    
    ngOnInit(): void {
        this._songService.getSongs()
            .subscribe(songs => this.songs = songs,
            error => this.errorMessage = <any>error);
    }
    
    onRatingClicked(message: string): void { 
        this.pageTitle = 'Song List: ' + message;
    }
    
    createSong(): void {
        
        this.formData = {
            "title": this.title,
            "artist": this.artist,
            "genre": this.genre
        }
        
        this.newSong = false;
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(this._songUrl, this.formData, headers)
            .subscribe(
            (res: any) => {
                console.log("Track added")
                this.songs.push(JSON.parse(res._body))
            },
            error => this.errorMessage = <any>error
            );
    }
    
    createNewSong(): void {
        if(this.newSong == true){
            this.newSong = false;
        } else {
            this.newSong = true;   
        }       
    }
}