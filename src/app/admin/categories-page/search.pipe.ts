import { Pipe, PipeTransform } from '@angular/core'
import { Category } from 'src/app/models/model';

@Pipe({
    name: 'searchCategory'
})
export class SearchPipe implements PipeTransform {
    transform(category: Category[], search = ''): Category[] {
        if (!search.trim()) {
            return category
        }
        return category.filter(post => {
            return post.categoryName.toLowerCase().includes(search.toLowerCase())
        })
    }
}