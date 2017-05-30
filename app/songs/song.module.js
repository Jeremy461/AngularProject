"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var song_service_1 = require("./song.service");
var shared_module_1 = require("../shared/shared.module");
var song_detail_component_1 = require("./song-detail.component");
var song_list_component_1 = require("./song-list.component");
var song_filter_pipe_1 = require("./song-filter.pipe");
var SongModule = (function () {
    function SongModule() {
    }
    return SongModule;
}());
SongModule = __decorate([
    core_1.NgModule({
        declarations: [
            song_list_component_1.SongListComponent,
            song_detail_component_1.SongDetailComponent,
            song_filter_pipe_1.SongFilterPipe
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'songs', component: song_list_component_1.SongListComponent },
                { path: 'song/:id', component: song_detail_component_1.SongDetailComponent },
            ])
        ],
        providers: [
            song_service_1.SongService
        ]
    })
], SongModule);
exports.SongModule = SongModule;
//# sourceMappingURL=song.module.js.map