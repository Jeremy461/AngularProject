import { PipeTransform, Pipe } from '@angular/core'

import { ISong } from './song'

@Pipe({
    name: 'songFilter'
})

export class SongFilterPipe implements PipeTransform {
    transform(value: ISong[], filterBy: string): ISong[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((song: ISong) =>
            song.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}