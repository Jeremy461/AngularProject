import { NgModule } from '@angular/core';

import { RouterModule }  from '@angular/router';
import { SongService } from './song.service';
import { SharedModule } from '../shared/shared.module';

import { SongDetailComponent } from './song-detail.component';
import { SongListComponent }  from './song-list.component';
import { SongFilterPipe } from './song-filter.pipe';


@NgModule({
    declarations: [
        SongListComponent,
        SongDetailComponent,
        SongFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'songs', component: SongListComponent },
            { path: 'song/:id', component: SongDetailComponent },
        ])
    ],
    providers: [
        SongService
    ]
})

export class SongModule {
    
}