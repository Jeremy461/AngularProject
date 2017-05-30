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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var song_service_1 = require("./song.service");
require("rxjs/add/operator/finally");
var SongDetailComponent = (function () {
    function SongDetailComponent(_route, _router, _songService, http) {
        this._route = _route;
        this._router = _router;
        this._songService = _songService;
        this.http = http;
        this.pageTitle = 'Song Detail';
        this.edit = false;
        this._songUrl = 'http://145.24.222.211:8000/api/songs/';
    }
    SongDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("song detail OnInit");
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.getSong(id);
        });
    };
    SongDetailComponent.prototype.getSong = function (id) {
        var _this = this;
        console.log("song detail getSong");
        this._songService.getSong(id).subscribe(function (song) { return _this.song = song; }, function (error) { return _this.errorMessage = error; });
    };
    SongDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/songs']);
    };
    SongDetailComponent.prototype.deleteSong = function () {
        var _this = this;
        this._songService.deleteSong(this.song._id).subscribe(function (error) { return _this.errorMessage = error; });
    };
    SongDetailComponent.prototype.editSong = function () {
        this.edit = true;
    };
    SongDetailComponent.prototype.saveSong = function () {
        var _this = this;
        console.log(this.artist);
        this.formData = {
            "title": this.title,
            "artist": this.artist,
            "genre": this.genre
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(this._songUrl + this.song._id, this.formData, headers)
            .finally(function () { return _this._router.navigate(['/songs']); })
            .subscribe(function (res) {
            _this.song.push(JSON.parse(res._body));
            console.log("Edit successfull");
        }, function (error) { return _this.errorMessage = error; });
    };
    return SongDetailComponent;
}());
SongDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/songs/song-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        song_service_1.SongService,
        http_1.Http])
], SongDetailComponent);
exports.SongDetailComponent = SongDetailComponent;
//# sourceMappingURL=song-detail.component.js.map