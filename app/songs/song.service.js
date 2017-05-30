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
var observable_1 = require("rxjs/observable");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
var SongService = (function () {
    function SongService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._songUrl = 'http://145.24.222.211:8000/api/songs';
    }
    SongService.prototype.getSongs = function () {
        console.log("song service getSongs");
        return this._http.get(this._songUrl)
            .map(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    SongService.prototype.getSong = function (id) {
        console.log("song service GetSong");
        return this.getSongs()
            .map(function (songs) { return songs.find(function (s) { return s._id === id; }); });
    };
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SongService.prototype.editSong = function () {
    };
    SongService.prototype.deleteSong = function (songId) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this._songUrl + "/" + songId;
        return this._http.delete(url, options)
            .do(function (data) { return console.log('deleteTrack: ' + JSON.stringify(data)); })
            .finally(function () { return _this._router.navigate(['/songs']); })
            .catch(this.handleError);
    };
    return SongService;
}());
SongService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], SongService);
exports.SongService = SongService;
//# sourceMappingURL=song.service.js.map