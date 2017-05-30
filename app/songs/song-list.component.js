"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var song_service_1 = require("./song.service");
require("rxjs/add/operator/finally");
var SongListComponent = (function () {
    function SongListComponent(_songService, _http) {
        this._songService = _songService;
        this._http = _http;
        this._songUrl = 'http://145.24.222.211:8000/api/songs/';
        this.pageTitle = 'Song List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.songs = [];
        this.newSong = false;
    }
    SongListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._songService.getSongs()
            .subscribe(function (songs) { return _this.songs = songs; }, function (error) { return _this.errorMessage = error; });
    };
    SongListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Song List: ' + message;
    };
    SongListComponent.prototype.createSong = function () {
        var _this = this;
        this.formData = {
            "title": this.title,
            "artist": this.artist,
            "genre": this.genre
        };
        this.newSong = false;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(this._songUrl, this.formData, headers)
            .subscribe(function (res) {
            console.log("Track added");
            _this.songs.push(JSON.parse(res._body));
        }, function (error) { return _this.errorMessage = error; });
    };
    SongListComponent.prototype.createNewSong = function () {
        if (this.newSong == true) {
            this.newSong = false;
        }
        else {
            this.newSong = true;
        }
    };
    return SongListComponent;
}());
SongListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'song-list.component.html',
        styleUrls: ['song-list.component.css']
    }),
    __metadata("design:paramtypes", [song_service_1.SongService, http_1.Http])
], SongListComponent);
exports.SongListComponent = SongListComponent;
//# sourceMappingURL=song-list.component.js.map